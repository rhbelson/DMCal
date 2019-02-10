import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

// https://ionicframework.com/docs/native/call-number/

export class ContactPage {

  constructor(public navCtrl: NavController, private callNumber: CallNumber) {

  }


  callDalia() {
  	this.callNumber.callNumber("6509956118", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

}
