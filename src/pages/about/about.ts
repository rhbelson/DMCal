import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { Chart } from 'chart.js';
import { LoadingController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	public doughnutChartLabels:string[] = ['Bathroom Runner','Food','Footrub', 'Security', 'Free'];
	public doughnutChartData:number[] = [30, 45, 50,15,20];
	public doughnutChartType:string = 'doughnut';

	// events
	public chartClicked(e:any):void {
	  console.log(e);
	}

	public chartHovered(e:any):void {
	  console.log(e);
	}


	public barChartOptions:any = {
	  scaleShowVerticalLines: false,
	  responsive: true
	};
	public barChartLabels:string[] = ["1","2","3","4","5","6","7","8","9","10"];
	public barChartType:string = 'bar';
	public barChartLegend:boolean = true;

	public barChartData:any[] = [
	  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Current Headcount'},
	  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Expected Headcount'}
	];


	public randomize():void {
	  // Only Change 3 values
	  let data = [
	    Math.round(Math.random() * 100),
	    59,
	    80,
	    (Math.random() * 100),
	    56,
	    (Math.random() * 100),
	    40];
	  let clone = JSON.parse(JSON.stringify(this.barChartData));
	  clone[0].data = data;
	  this.barChartData = clone;
	  /**
	   * (My guess), for Angular to recognize the change in the dataset
	   * it has to change the dataset variable directly,
	   * so one way around it, is to clone the data, change it and then
	   * assign it;
	   */
	}


  constructor(public navCtrl: NavController, public http: HTTP, private localNotifications: LocalNotifications) {
	var response="";
	this.http.get('http://hinckley.cs.northwestern.edu/~rbi054/get.php', {}, {})
	  .then(data => {

	    console.log(data.status);
	    // console.log(data.data); // data received by server
	    response=data.data;
	    console.log(data.headers);

	  })
	  .catch(error => {

	    console.log(error.status);
	    console.log(error.error); // error message as string
	    console.log(error.headers);
	  });

	setTimeout(function(){ 
		var text=response.split('\n');
		var activities=[];
		var norris_count=[];
		var timestamps=[];
		console.log("Parsing dm_info.txt dataset..");

		//Get Activities
		var i;
		for (i=0;i<text.length;i++) {
			//Get Activity
			var activity_beg=text[i].indexOf("userActivity");
			activities.push(text[i].substring(activity_beg+15,text[i].length-1));

			//Get Norris
			var norris_beg=text[i].indexOf("inNorris");
			var norris_end=text[i].indexOf("timestamp");
			norris_count.push(text[i].substring(norris_beg+10,norris_end-3));

			//Get timestamp
			var timestamp_end=text[i].indexOf("timestamp");
			timestamps.push(text[i].substring(norris_beg+11,timestamp_end-3));
		}
		console.log("There are "+activities.length.toString()+"dancers right now");
		// console.log(activities);
		// console.log(norris_count);
		// console.log(timestamps)




	 }, 4000);
	
  } //End of Constructor


  generateGraphs() {
  	try{
	  	var pw = document.getElementById("admin_password").getAttribute("ng-reflect-model").toLowerCase();
	  	if (pw=="nudm2019") {
	  		document.getElementById('about').style.display="none";
	  		document.getElementById('dancer_data').style.display="block";
	  	}
  	}
  	catch(err) {
  		//do nothing
  	}

  }

  generateNotifications() {
  	try {
  		var notify_text = document.getElementById("notification_text").getAttribute("ng-reflect-model").toLowerCase();
  		var audience = document.getElementById("audience").getAttribute("ng-reflect-model").toLowerCase();
  		console.log(notify_text,audience);

  		//Post notification text
  		var body =notify_text.toString()+"\n"+audience.toString();
		let header = {"Content-Type": "application/json", data: body};

		  this.http.post('http://hinckley.cs.northwestern.edu/~rbi054/dm_notification.php', header , {})
		  .then(data => {
		    console.log(data.status);
		    console.log(data.data); // data received by server
		    console.log(data.headers);

		  })
		  .catch(error => {

		    console.log(error.status);
		    console.log(error.error); // error message as string
		    console.log(error.headers);

		  });



  	}
  	catch(err) {
  		//do nothing
  	}

  }


}
