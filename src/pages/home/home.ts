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

  
  constructor(public platform: Platform, public navCtrl: NavController,  public loadingCtrl: LoadingController, private localNotifications: LocalNotifications, private geolocation: Geolocation, private http: HTTP, private storage: Storage, private uniqueDeviceID: UniqueDeviceID) {
    //0) Set background mode on
    // this.backgroundMode.enable();

    //1) Get user_id 
    // this.getUUID();
    

    //2) Check for Notifications every 10 seconds
    this.storage.set('recentNotif', '');

    //3) Check Notifications
    setInterval(() => {
    this.checkNotifications();
      }, 30000);

    //4) Get Users Location every 15 minutes
    // setInterval(() => {
    // this.getLocation();
    //   }, 900000);

    // setTimeout(() => {
    // this.trackBeacons();
    // }, 3000);
}


  getUUID() {
    console.log("getUUID called");
    this.uniqueDeviceID.get()
    .then((uuid: any) => console.log(uuid))
    .catch((error: any) => console.log(error));
  }



//**************************BEGINNING OF BEACON CODE************************************************//


  // trackBeacons() {
  //  if (this.platform.is('cordova')) {
  //   // Request permission to use location on iOS
  //   this.ibeacon.requestAlwaysAuthorization();
  //   // create a new delegate and register it with the native layer
  
  //     // create a new delegate and register it with the native layer
  //     let delegate = this.ibeacon.Delegate();

  //     delegate.didStartMonitoringForRegion()
  //       .subscribe(
  //         data => console.log('didStartMonitoringForRegion: ', data),
  //         error => console.error()
  //       );
      
  //     delegate.didEnterRegion()
  //       .subscribe(
  //         data => {
  //           console.log("Entered Region", data);
  
  //         }
  //       );

  //     delegate.didExitRegion()
  //       .subscribe(
  //         data => {
  //           console.log("Exited Region",data);
            
  //         }
  //       );
      
  //     let beaconRegion = this.ibeacon.BeaconRegion('norrisEntrance','2F234454-CF6D-4A0F-ADF2-F4911BA9FFA6');
  //     this.ibeacon.startMonitoringForRegion(beaconRegion)
  //       .then(
  //         () => console.log('Started Monitoring', beaconRegion),
  //         error => console.error('Failed to begin monitoring: ', error)
  //       );

  //     this.ibeacon.enableDebugNotifications();
  //   }
  //   else {
  //     console.log("not cordova")
  //   }
  // }


// this.ibeacon.startMonitoringForRegion(beaconRegion)
//   .then(
//     () => console.log('Native layer received the request to monitoring'),
//     error => console.error('Native layer failed to begin monitoring: ', error)
//   );

//**************************END OF BEACON CODE************************************************//

//Checks for incoming notifications
checkNotifications() {
  var response='';
  var recentNotif;
  //Get recent notification from storage
   this.storage.get('recentNotif').then((val) => {
    recentNotif=val;
  });

  
  this.http.get('http://hinckley.cs.northwestern.edu/~rbi054/dm_notification_get.php', {}, {})
    .then(data => {

      console.log(data.status);
      // console.log(data.data); // data received by server
      response=data.data;
      console.log("Checking notifications received: "+response.toString());
      // console.log(data.headers);

    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    });


    //Wait Until Notification Comes in
    setTimeout(() => {
    //Check if old notification
    if (recentNotif==response.toString()) {
      //do nothing
      console.log("Old notification!");
    }
    if (recentNotif!=response.toString()) {
      console.log("New notification!");
      var notification_body=response.split('\n');
      
      this.localNotifications.schedule({
          id: 1,
          text: "NUDM 2019: "+notification_body[0].toString(),
          trigger: {at: new Date(new Date().getTime() + 10)},
      });
      this.storage.set('recentNotif', response.toString());
    }
  }, 3000);

}

updateUser(name) {
  this.storage.set("user",name);
}

makeId() {
  var uuid = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
      uuid += possible.charAt(Math.floor(Math.random() * possible.length));
  return uuid;
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
  var userId=this.makeId();
  var body = '{"lat": '+ user_lat.toString()+', "long": '+user_long.toString()+', "userId": '+userId+', "inNorris": '+inNorris.toString()+', "timestamp": '+user_time.toString()+', "userActivity": '+ userActivity.toString()+'}';
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



addNotification() {
  let timenow=new Date();
  let time=new Date(2019, 0, 20, 15, 52);
  console.log("Triggering Notification at "+time);
  console.log("Current Time: "+timenow);
  // Schedule a single notification
  this.localNotifications.clearAll();
  this.localNotifications.schedule({
    id: 3,
    title: 'DMCal',
    text: 'Reminder! Do Your Job!',
    trigger: { at: new Date(2020, 0, 20, 15, 52) },
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
  target_email = document.getElementById("user_email").getAttribute("ng-reflect-model");
  target_email = target_email.toLowerCase();
  console.log("Target Email: "+target_email);

  //Fix ".edu" not showing up bug
  target_email+=".edu";


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
  xmlhttp.open("GET","./dm_schedule2.csv",true);
  xmlhttp.send();



///////BEGINNING OF CODE THAT DYNAMICALLY RENDERS DM MEMBER SCHEDULE////////////////////
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
    console.log("Checking string: "+words[1]);
    if (words[1]==target_email) {
      console.log("found email :"+ words[1])
      email_found=true;
      // this.updateUser(words[1].toString());
      //Fill in calendar (for however many activities exist...)
      //STEP 1: 4th Column is first activity, User Has words.length-3 activities
      console.log("This user has "+words.length+"activities");
      
      
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


        //Populate Storage
        // console.log("Begin Populating Storage");
        // console.log(act_iter.toString());
        // console.log(activity_info[2].toString());
        // this.storage.set(act_iter.toString(), activity_info[2].toString());
        // console.log("STORAGE 1 WORKED");
        // this.storage.set(time_iter,activity_info[0]+" – "+activity_info[1]);

        // this.storage.set(loc_iter,activity_info[3]);


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

         else if (document.getElementById(act_iter).innerHTML.toLowerCase()=="bathroom runner") {
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
///////BEGINNING OF CODE THAT DYNAMICALLY RENDERS DM MEMBER SCHEDULE////////////////////

}

}
