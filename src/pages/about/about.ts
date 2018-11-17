import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public http: HTTP) {
	 // this.http.get('http://hinckley.cs.northwestern.edu/~rbi054/get.php', function(response) {
	 // 		console.log("Good!");
		//   console.log(response);
		// }, function(response) {
		//   console.log(response.error);
		//   console.log("Not so good..");
		// });
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
		}
		console.log(activities);
		console.log(norris_count);




	 }, 4000);
	

  }


}
