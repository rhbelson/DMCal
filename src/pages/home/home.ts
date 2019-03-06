import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
// import {Http ,Response } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
// import { BackgroundMode } from '@ionic-native/background-mode';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
// import { IBeacon } from '@ionic-native/ibeacon';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
  email: string = "";
  
  constructor(public platform: Platform, public navCtrl: NavController,  public loadingCtrl: LoadingController, private localNotifications: LocalNotifications, private geolocation: Geolocation, private http: HTTP, private storage: Storage, private uniqueDeviceID: UniqueDeviceID) {
    
    var user_committee="N/A";
    var user_name="N/A";
}


updateUser(name) {
  this.storage.set("user",name);
}


getLocation() {
  this.geolocation.getCurrentPosition().then((resp) => {
 // resp.coords.latitude
 // resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);
});

let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
console.log(data.coords.latitude,data.coords.longitude);
 var user_lat=data.coords.latitude;
 var user_long=data.coords.longitude;
 var user_time=data.timestamp;
 var inNorris=false;
 //Check if in Norris
 if ((user_lat>=42.053687 || user_lat<=42.053690) && (user_long<=-87.672593 || user_long>=-87.672597)) {
    console.log("User is in Norris");
    inNorris=true;
    // var user_location="Norris";
  }
 else {
    console.log("User is NOT in Norris");
    // var user_location="Not in Tent";
  }

  var userActivity="footrub";
  var user_committee="N/A";
  var user_name="N/A";
  var body = '{"lat": '+ user_lat.toString()+', "long": '+user_long.toString()+', "Name": '+user_name+', "Committee": '+user_committee+', "inNorris": '+inNorris.toString()+', "timestamp": '+user_time.toString()+', "userActivity": '+ userActivity.toString()+'}';
  let header = {"Content-Type": "application/json", data: body};

  this.http.post('http://hinckley.cs.northwestern.edu/~rbi054/dm_post.php', header , {})
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

});
  
      

}




learnMore() {
  // this.addNotification();
  //Norris: 42.053689, -87.672595
   let loading = this.loadingCtrl.create({
    spinner: 'hide',
    content: 'Thank you!'
  });

  loading.present();

  setTimeout(() => {
  //Finish Loader
    loading.dismiss();
  }, 1000);
  this.getLocation();
}



presentLoadingText() {
  // console.log(this.inputValue)
  document.getElementById("cube").display="block";
  
     // Data Processing
  document.getElementById('alert_card').style.display="none";
  var target_email;
  // target_email=this.inputValue;
  target_email = this.email;
  target_email = target_email.toLowerCase();
  console.log("Target Email: "+target_email);
  console.log("Target Email: "+ this.email);


  //Edge Case
  if (target_email=="") {
    console.log("null string");
    document.getElementById('alert_card').style.display="block";
    document.getElementById("fullCalendar").style.display="none";
    return;
  }
  var txt = '';


  this.http.get('http://hinckley.cs.northwestern.edu/~rbi054/get_dmcal.php', {}, {})
    .then(data => {

      console.log(data.status);
      // console.log(data.data); // data received by server
      txt=data.data;
      console.log("DM Full Schedule: "+txt.toString());
      // console.log(data.headers);
        console.log("parsing input.."); 
  var lines=txt.split('\n');
  console.log(lines[1]);
  console.log(lines.length);
  ///Step 1: Find Correct User Email
  var i;
  var email_found=false;
  for (i=0;i<lines.length;i++) {
    var words=lines[i].split(',');
    console.log("Checking string: "+words[1]);
    if (words[1]==target_email) {
      console.log("found email :"+ words[1])
      email_found=true;
      // this.updateUser(words[1].toString());
      //Fill in calendar (for however many activities exist...)
      //STEP 1: 4th Column is first activity, User Has words.length-3 activities
      console.log("This user has "+words.length+"activities");
      console.log("This user is on the "+words[2]+" committee");

      //Set Name & Committee
      // this.user_name=words[1];
      // this.user_committee=words[2];
      // console.log(this.user_name,this.user_committee);
      document.getElementById("welcomeMessage").innerHTML="Carpe DM, "+words[0].toString()+"! | Your Committee: "+words[2].toString();

      
      
      var a;
      for (a=0;a<words.length-3;a++) {
         //Render Specific List Item
        var item_iter="item"+(a+1).toString();
        console.log(item_iter);
        document.getElementById(item_iter).style.display="block";


        //Update Text
        var activity_info=words[3+a].split(";");
        console.log("Start Time: "+activity_info[0]);
        console.log("End Time: "+activity_info[1]);
        console.log("Activity: "+activity_info[2]);
        console.log("Location: "+activity_info[3]);


        var act_iter="activity_"+(a+1).toString();
        var time_iter="time_"+(a+1).toString();
        var loc_iter="loc_"+(a+1).toString();
        document.getElementById(act_iter).innerHTML=activity_info[2];

        //Parse Date
        if (activity_info[0].includes("2019-03-08T")) {
          activity_info[0]=activity_info[0].replace("2019-03-08T","Friday ");
        }
        if (activity_info[0].includes("2019-03-09T")) {
          activity_info[0]=activity_info[0].replace("2019-03-09T","Saturday ");
        }
        if (activity_info[1].includes("2019-03-08T")) {
          activity_info[1]=activity_info[1].replace("2019-03-08T","Friday ");
        }
        if (activity_info[1].includes("2019-03-09T")) {
          activity_info[1]=activity_info[1].replace("2019-03-09T","Saturday ");
        }

        document.getElementById(time_iter).innerHTML=activity_info[0]+" – "+activity_info[1];
        document.getElementById(loc_iter).innerHTML=activity_info[3];

        //Update Icons with for loop by activity name
        var icon_iter="icon".concat((a+1).toString());
        if (document.getElementById(act_iter).innerHTML.toLowerCase()=="footrub") {
          document.getElementById(icon_iter).className="icon icon-md ion-md-medkit";
         }

        else if (document.getElementById(act_iter).innerHTML.toLowerCase()=="free") {
            document.getElementById(icon_iter).className="icon icon-md ion-md-happy";
         }

         else if (document.getElementById(act_iter).innerHTML.toLowerCase()=="food") {
            document.getElementById(icon_iter).className="icon icon-md ion-md-pizza";
         }

         else if (document.getElementById(act_iter).innerHTML.toLowerCase()=="security") {
            document.getElementById(icon_iter).className="icon icon-md ion-md-eye";
         }

         else if (document.getElementById(act_iter).innerHTML.toLowerCase()=="pushups") {
            document.getElementById(icon_iter).className="icon icon-md ion-md-hand";
         }
         else if (document.getElementById(act_iter).innerHTML.toLowerCase()=="break") {
            document.getElementById(icon_iter).className="icon icon-md ion-md-body";
         }
         else if (document.getElementById(act_iter).innerHTML.toLowerCase()=="off") {
            document.getElementById(icon_iter).className="icon icon-md ion-md-body";
         }
         else if (document.getElementById(act_iter).innerHTML.toLowerCase()=="puppies") {
            document.getElementById(icon_iter).className="icon icon-md ion-md-paw";
         }
         else if (document.getElementById(act_iter).innerHTML.toLowerCase()=="dance") {
            document.getElementById(icon_iter).className="icon icon-md ion-md-walk";
         }
         else if (document.getElementById(act_iter).innerHTML.toLowerCase()=="tent morale") {
            document.getElementById(icon_iter).className="icon icon-md ion-md-trending-up";
         }
         else if (document.getElementById(act_iter).innerHTML.toLowerCase()=="bathroom marquee") {
            document.getElementById(icon_iter).className="icon icon-md ion-md-battery-charging";
         }
         else if (document.getElementById(act_iter).innerHTML.toLowerCase()=="on call") {
            document.getElementById(icon_iter).className="icon icon-md ion-md-phone-portrait";
         }
         else if (document.getElementById(act_iter).innerHTML.toLowerCase()=="30k table") {
            document.getElementById(icon_iter).className="icon icon-md ion-md-cash";
         }
         else if (document.getElementById(act_iter).innerHTML.toLowerCase()=="phonathon") {
            document.getElementById(icon_iter).className="icon icon-md ion-md-call";
         }
         else if (document.getElementById(act_iter).innerHTML.toLowerCase()=="30k perk area") {
            document.getElementById(icon_iter).className="icon icon-md ion-md-ribbon";
         }
         else if (document.getElementById(act_iter).innerHTML.toLowerCase()=="run-in") {
            document.getElementById(icon_iter).className="icon icon-md ion-md-walk";
         }
         else if (document.getElementById(act_iter).innerHTML.toLowerCase()=="counting") {
            document.getElementById(icon_iter).className="icon icon-md ion-md-calculator";
         }
         else if (document.getElementById(act_iter).innerHTML.toLowerCase().includes("begin")) {
            document.getElementById(icon_iter).className="icon icon-md ion-md-play";
         }
         else {
          document.getElementById(icon_iter).className="icon icon-md ion-md-checkbox";
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
      document.getElementById("cube").display="none";

    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    });

}

}
