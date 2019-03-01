import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push } from '@ionic-native/push'
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Geolocation } from '@ionic-native/geolocation';
import { HTTP } from '@ionic-native/http';
import { ChartsModule } from 'ng2-charts';
import { IonicStorageModule } from '@ionic/storage';
import { BackgroundMode } from '@ionic-native/background-mode';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { IBeacon } from '@ionic-native/ibeacon';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';
import {FCM} from "@ionic-native/fcm";

// @ts-ignore
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Push,
    LocalNotifications,
    Geolocation,
    HTTP,
    BackgroundMode,
    UniqueDeviceID,
    IBeacon,
    CallNumber,
    FCM,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteServiceProvider,
    RemoteServiceProvider,
  ]
})
export class AppModule {}
