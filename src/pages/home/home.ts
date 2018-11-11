import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import {Http ,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {

	// posts: any;
  
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private localNotifications: LocalNotifications) {
    // may need to add public http: Http,
//   	this.http.get('http://hinckley.cs.northwestern.edu/~rbi054/dm_cal.csv').map(res => res.json()).subscribe(
//     data => {
//         this.posts = data.data.children;
//     },
//     err => {
//         console.log("Oops!");
//     }
// );
  // this.inputValue="";
}


learnMore() {
  this.addNotification();
}


addNotification() {
  console.log("Pinging you now!");
  // Schedule a single notification
  this.localNotifications.schedule({
    id: 1,
    text: 'Reminder! Do Your Job!',
    trigger: {at: new Date(new Date().getTime() + 10)},
  });
}


presentLoadingText() {
  // console.log(this.inputValue)
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
  // target_email=this.inputValue;
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
      document.getElementById("activity_5").innerHTML=words[5];
      document.getElementById("activity_6").innerHTML=words[6];
      document.getElementById("activity_7").innerHTML=words[7];
      document.getElementById("activity_8").innerHTML=words[8];
      // document.getElementById("activity_9").innerHTML=words[9];
      // document.getElementById("activity_10").innerHTML=words[10];
      // document.getElementById("activity_11").innerHTML=words[11];
      // document.getElementById("activity_12").innerHTML=words[12];
      // document.getElementById("activity_13").innerHTML=words[13];
      // document.getElementById("activity_14").innerHTML=words[14];
      // document.getElementById("activity_15").innerHTML=words[15];
      
    //Update Icons with for loop by activity name
    var j;
    for (j=1; j<9; j++) {
      var activity_iter="activity_".concat(j.toString());
      var icon_iter="icon".concat(j.toString());
      console.log("Activity being changed: "+activity_iter);
      if (document.getElementById(activity_iter).innerHTML.toLowerCase()=="footrub") {
        document.getElementById(icon_iter).className="icon icon-md ion-md-medkit";
       }

      else if (document.getElementById(activity_iter).innerHTML.toLowerCase()=="free") {
          document.getElementById(icon_iter).className="icon icon-md ion-md-happy";
       }

       else if (document.getElementById(activity_iter).innerHTML.toLowerCase()=="food") {
          document.getElementById(icon_iter).className="icon icon-md ion-md-pizza";
       }

       else if (document.getElementById(activity_iter).innerHTML.toLowerCase()=="security") {
          document.getElementById(icon_iter).className="icon icon-md ion-md-eye";
       }

       else if (document.getElementById(activity_iter).innerHTML.toLowerCase()=="bathroom runner") {
          document.getElementById(icon_iter).className="icon icon-md ion-md-water";
       }
    }

    }
  }

  if (email_found==false) {
    document.getElementById('alert_card').style.display="block";
    document.getElementById("fullCalendar").style.display="none";
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
