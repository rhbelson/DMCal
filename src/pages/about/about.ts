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
this.http.get('http://hinckley.cs.northwestern.edu/~rbi054/get.php', {}, {})
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
	 console.log("Hello world!");
  }


}
