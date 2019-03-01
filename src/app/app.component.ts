import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Storage } from '@ionic/storage';
import {FCM} from "@ionic-native/fcm";
import {HTTP} from "@ionic-native/http";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  // @ts-ignore
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private fcm: FCM,
              private storage: Storage, private http: HTTP) {
    platform.ready().then(() => {

      this.fcm.getToken().then(token => {
        this.storage.set('fcmToken', token).then(() => {});
      });

      this.fcm.onTokenRefresh().subscribe(token => {
        this.storage.set('fcmToken', token).then(() => {});
        this.storage.get('email').then(email => {
          if(email) {
            this.http.post('http://api.nudm.org/app_token.php', {token: token, email: email}, {})
              .then(data => {});
          }
        })
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
