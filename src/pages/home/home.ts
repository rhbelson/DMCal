import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http ,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	// posts: any;
  
  constructor(public navCtrl: NavController, public http: Http, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
//   	this.http.get('http://hinckley.cs.northwestern.edu/~rbi054/dm_cal.csv').map(res => res.json()).subscribe(
//     data => {
//         this.posts = data.data.children;
//     },
//     err => {
//         console.log("Oops!");
//     }
// );
}

// presentLoadingDefault() {
//   let loading = this.loadingCtrl.create({
//     content: 'Please wait...'
//   });

//   loading.present();

//   setTimeout(() => {
//     loading.dismiss();
//   }, 5000);
// }

// presentLoadingCustom() {
//   let loading = this.loadingCtrl.create({
//     spinner: 'hide',
//     content: `
//       <div class="custom-spinner-container">
//         <div class="custom-spinner-box"></div>
//       </div>`,
//     duration: 5000
//   });

//   loading.onDidDismiss(() => {
//     console.log('Dismissed loading');
//   });

//   loading.present();
// }




presentLoadingText() {
  let loading = this.loadingCtrl.create({
    spinner: 'hide',
    content: 'Loading Please Wait...'
  });

  loading.present();


  setTimeout(() => {
  //Finish Loader
    loading.dismiss();
  }, 5000);
  
     // Data Processing
  document.getElementById('alert_card').style.display="none";
  var target_email;
  target_email=document.querySelectorAll("#user_email>input")[0].value;
  console.log(target_email);

  //Edge Case
  if (target_email=="") {
    console.log("null string");
    document.getElementById('alert_card').style.display="block";
    document.getElementById("fullCalendar").style.display="none";
    loading.dismiss();
    return;
  }

  var txt = '';
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
  if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
  txt = xmlhttp.responseText;
  console.log(txt);
  }
  };
  xmlhttp.open("GET","./dm_cal.csv",true);
  xmlhttp.send();


setTimeout(function(){ 
  console.log("parsing input.."); 
  var lines=txt.split('\n');
  console.log(lines[0]);
  console.log(lines.length);
  ///Step 1: Find Correct User Email
  var i;
  var email_found=false;
  for (i=0;i<lines.length;i++) {
    var words=lines[i].split(',');
    console.log("Checking string: "+words[0]);
    if (words[0]==target_email) {
      console.log("found email :"+ words[0])
      email_found=true;
      //Fill in calendar (for however many activities exist...)
      document.getElementById("activity_1").innerHTML=words[1];
      document.getElementById("activity_2").innerHTML=words[2];
      document.getElementById("activity_3").innerHTML=words[3];
      document.getElementById("activity_4").innerHTML=words[4];
    }
  }

  if (email_found==false) {
    document.getElementById('alert_card').style.display="block";
  }
  else {
    //Lastly, display calendar
    document.getElementById('alert_card').style.display="none";
    document.getElementById("fullCalendar").style.display="block";
    email_found=false;
  }
   }, 3000);

}

	

  fireAlert() {
      let alert = this.alertController.create({
          title: 'Error!',
          subTitle: 'Sorry, that email does not appear in our directory',
          buttons: ['OK']
      });

      alert.present();
  }
 

  // adjustCalUI() {
  // 	//for each activity, read the text (e.g., footrub) and adjust icon accordingly..
  //   if (document.getElementById("activity_1").innerHTML=="footrub") {

  //   }
  // }


  viewSchedule() {
        // Data Processing
        document.getElementById('alert_card').style.display="none";
        var target_email;
        target_email=document.querySelectorAll("#user_email>input")[0].value;
        console.log(target_email);


        var txt = '';
  		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function(){
		  if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
		    txt = xmlhttp.responseText;
		    console.log(txt);
		  }
		};
		xmlhttp.open("GET","./dm_cal.csv",true);
		xmlhttp.send();


		// var target_email="bob@example.com";
		//Parse Input
		setTimeout(function(){ 
			console.log("parsing input.."); 
			var lines=txt.split('\n');
        	console.log(lines[0]);


        ///Step 1: Find Correct User Email
        	var i;
        	var email_found=false;
        	for (i=0;i<lines.length;i++) {
        		var words=lines[i].split(',');
        		if (words[0]==target_email) {
        			console.log("found email :"+ words[0])
        			email_found=true;
        			//Fill in calendar (for however many activities exist...)
	        		document.getElementById("activity_1").innerHTML=words[1];
	        		document.getElementById("activity_2").innerHTML=words[2];
	        		document.getElementById("activity_3").innerHTML=words[3];
	        		document.getElementById("activity_4").innerHTML=words[4];
        		}
        	}

        	if (email_found==false) {
            document.getElementById('alert_card').style.display="block";
        		// Alert not working
			    // alert.present();
            // fireAlert();
        	}
        	else {
	        	//Lastly, display calendar
            document.getElementById('alert_card').style.display="none";
	        	document.getElementById("fullCalendar").style.display="block";
	        	email_found=false;
        	}
        	

        }, 3000);

        

    }




  // getPosts() {
  //   return  this.http.get(this.getApiUrl)
  //           .do((res : Response ) => console.log(res.json())
  //           .map((res : Response ) => res.json())
  //           .catch(error => console.log(error)));}

}
