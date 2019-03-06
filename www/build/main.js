webpackJsonp([0],{

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 216;

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/garrettmatsuda/Documents/NUDM/DMCal/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/garrettmatsuda/Documents/NUDM/DMCal/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, http, localNotifications, alertCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.localNotifications = localNotifications;
        this.alertCtrl = alertCtrl;
        this.doughnutChartLabels = ['Bathroom Runner', 'Food', 'Footrub', 'Security', 'Free'];
        this.doughnutChartData = [30, 45, 50, 15, 20];
        this.doughnutChartType = 'doughnut';
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Current Headcount' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Expected Headcount' }
        ];
        var response = "";
        this.http.get('http://hinckley.cs.northwestern.edu/~rbi054/get.php', {}, {})
            .then(function (data) {
            console.log(data.status);
            // console.log(data.data); // data received by server
            response = data.data;
            console.log(data.headers);
        })
            .catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
        setTimeout(function () {
            var text = response.split('\n');
            var activities = [];
            var norris_count = [];
            var timestamps = [];
            console.log("Parsing dm_info.txt dataset..");
            //Get Activities
            var i;
            for (i = 0; i < text.length; i++) {
                //Get Activity
                var activity_beg = text[i].indexOf("userActivity");
                activities.push(text[i].substring(activity_beg + 15, text[i].length - 1));
                //Get Norris
                var norris_beg = text[i].indexOf("inNorris");
                var norris_end = text[i].indexOf("timestamp");
                norris_count.push(text[i].substring(norris_beg + 10, norris_end - 3));
                //Get timestamp
                var timestamp_end = text[i].indexOf("timestamp");
                timestamps.push(text[i].substring(norris_beg + 11, timestamp_end - 3));
            }
            console.log("There are " + activities.length.toString() + " dancers right now");
            // console.log(activities);
            // console.log(norris_count);
            // console.log(timestamps)
        }, 4000);
    } //End of Constructor
    // events
    AboutPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    AboutPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    AboutPage.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    };
    AboutPage.prototype.generateGraphs = function () {
        try {
            var pw = document.getElementById("admin_password").getAttribute("ng-reflect-model").toLowerCase();
            if (pw == "nudm2019") {
                document.getElementById('about').style.display = "none";
                document.getElementById('dancer_data').style.display = "block";
            }
        }
        catch (err) {
            //do nothing
        }
    };
    AboutPage.prototype.generateNotifications = function () {
        try {
            var notify_text = document.getElementById("notification_text").getAttribute("ng-reflect-model");
            var audience = document.getElementById("audience").getAttribute("ng-reflect-model");
            console.log(notify_text, audience);
            //Post notification text
            var body = notify_text.toString() + "\n" + audience.toString();
            var header = { "Content-Type": "application/json", data: body };
            this.http.post('http://hinckley.cs.northwestern.edu/~rbi054/dm_notification.php', header, {})
                .then(function (data) {
                console.log(data.status);
                console.log(data.data); // data received by server
                console.log(data.headers);
            })
                .catch(function (error) {
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
            });
            var alert_1 = this.alertCtrl.create({
                title: 'Notification Deployed',
                subTitle: audience.toString() + " will receive message shortly",
                buttons: ['Ok']
            });
            alert_1.present();
        }
        catch (err) {
            //do nothing
        }
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/garrettmatsuda/Documents/NUDM/DMCal/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About NUDM 2019\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n<div id="about">\n<ion-card>\n	<ion-card-title style="text-align: center;background-color: #9370DB;color:#ffffff;font-family: Lato"><b>\n      About The App</b>\n      </ion-card-title>\n  <ion-card-content style="background-color: #E9ECF5;color:#000000;font-family: Lato">\n     <h2>Get your real time schedule updates to NUDM 2019 via this app. Check back in to see your updated schedule with location, times, and any other additional information.</h2>\n  </ion-card-content>\n</ion-card>\n\n<ion-card>\n	<ion-card-title style="text-align: center;background-color: #9370DB;color:#ffffff;font-family: Lato"><b>\n      About Notifications </b>\n      </ion-card-title>\n  <ion-card-content style="background-color: #E9ECF5;color:#000000;font-family: Lato">\n     <h2>Periodically, you may receive notification from your Committee heads asking you to "Check In" or change your assignment. </h2>\n  </ion-card-content>\n</ion-card>\n\n\n<ion-card>\n	<ion-card-title style="text-align: center;background-color: #9370DB;color:#ffffff;font-family: Lato"><b>\n      Who should I contact with any questions? </b>\n      </ion-card-title>\n  <ion-card-content style="background-color: #E9ECF5;color:#000000;font-family: Lato">\n     <h2>Contact your committee head if you believe you have an error in your schedule.</h2>\n  </ion-card-content>\n</ion-card>\n\n\n  <label hidden style="margin-top:20px;" class="item item-input">\n    <span class="input-label">Password:</span>\n    <input [(ngModel)]="pw" id="admin_password" type="password">\n  </label>\n  <button hidden color="royal" style="background-color:#9370DB" (click)="generateGraphs()" style="width:100%" class="button button-small">\n  Submit\n</button>\n</div>\n\n\n\n<div id="dancer_data" style="display: none;">\n<ion-card>\n	<ion-card-title style="text-align: center;">\n      Activity Breakdown\n      </ion-card-title>\n    <p style="text-align: center;">\n      Compare attendance of activities for this block\n    </p>\n  <ion-card-content>\n    <canvas baseChart\n                [data]="doughnutChartData"\n                [labels]="doughnutChartLabels"\n                [chartType]="doughnutChartType"\n                (chartHover)="chartHovered($event)"\n                (chartClick)="chartClicked($event)"></canvas>\n  </ion-card-content>\n</ion-card>\n\n<ion-card>\n	<ion-card-title style="text-align: center;">\n      Headcount Breakdown\n      </ion-card-title>\n    <p style="text-align: center;">\n      Compare expected attendance by block number\n    </p>\n  <ion-card-content>\n    <canvas baseChart\n              [datasets]="barChartData"\n              [labels]="barChartLabels"\n              [options]="barChartOptions"\n              [legend]="barChartLegend"\n              [chartType]="barChartType"\n              (chartHover)="chartHovered($event)"\n              (chartClick)="chartClicked($event)"></canvas>\n  </ion-card-content>\n</ion-card>\n\n\n<ion-card>\n  <ion-card-title style="text-align: center;">\n      Real-Time Notification Generator\n      </ion-card-title>\n    <p style="text-align: center;">\n      Want to broadcast notifications to members? Enter info here.\n    </p>\n  <ion-card-content>\n    <ion-item>\n  <ion-label style="font-size:14px;">Notification Recipient</ion-label>\n  <ion-select id="audience" [(ngModel)]="audience">\n    <ion-option value="everyone">Everyone</ion-option>\n    <ion-option value="dae">DAE</ion-option>\n  </ion-select>\n</ion-item>\n      <label style="margin-top:20px;" class="item item-input">\n    <span style="margin-left:15px;" class="input-label">Notification Text:</span>\n    <input [(ngModel)]="notification_text" id="notification_text" type="text">\n  </label>\n  <button (click)="generateNotifications()" style="width:100%" class="button button-small button-assertive">\n  Submit\n</button>\n  </ion-card-content>\n</ion-card>\n\n</div>\n  \n</ion-content>'/*ion-inline-end:"/Users/garrettmatsuda/Documents/NUDM/DMCal/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number_ngx__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, callNumber) {
        this.navCtrl = navCtrl;
        this.callNumber = callNumber;
    }
    ContactPage.prototype.callDalia = function () {
        this.callNumber.callNumber("6509956118", true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/garrettmatsuda/Documents/NUDM/DMCal/src/pages/contact/contact.html"*/'DM Contact Page\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="font-family: Lato">\n  <ion-list>\n    <ion-item style="background-color: #D0D0D0;font-weight: bold"> DAE</ion-item>\n    <ion-item (click)="callDalia()">\n      <ion-icon name="body"></ion-icon>\n      Dalia Jude (DAE Co Chair)\n      <br>\n      <button ion-button> <ion-icon style="margin-right: 5px" name="call"></ion-icon> 650-995-6118 </button>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="body"></ion-icon>\n      Daniel Abia (DAE Co Chair)\n      <br>\n      <button ion-button> <ion-icon style="margin-right: 5px" name="call"></ion-icon>954-604-1101</button>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="body"></ion-icon>\n      Regina Fricton (Head Girl)\n      <br>\n      <button ion-button> <ion-icon style="margin-right: 5px" name="call"></ion-icon>612-850-2024 </button>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="body"></ion-icon>\n      Alec Chang (Head Boy)\n      <br>\n      <button ion-button><ion-icon style="margin-right: 5px" name="call"></ion-icon>847-644-5054</button>\n    </ion-item>\n\n    <ion-item style="background-color: #D0D0D0;font-weight: bold"> Food</ion-item>\n    <ion-item>\n      <ion-icon name="pizza"></ion-icon>\n      Nicole Benkowski (Food Co Chair)\n      <br>\n      <button ion-button> <ion-icon style="margin-right: 5px" name="call"></ion-icon> 773-614-9985 </button>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="pizza"></ion-icon>\n      Tynan Friend (Food Co Chair)\n      <br>\n      <button ion-button> <ion-icon style="margin-right: 5px" name="call"></ion-icon>617-584-5683</button>\n    </ion-item>\n\n    <ion-item style="background-color: #D0D0D0;font-weight: bold"> Finance</ion-item>\n    <ion-item>\n      <ion-icon name="calculator"></ion-icon>\n      Kamryn Lewis (Finance Co Chair)\n      <br>\n      <button ion-button> <ion-icon style="margin-right: 5px" name="call"></ion-icon> 239-747-3990 </button>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="calculator"></ion-icon>\n      Lindsey Waxman (Finance Co Chair)\n      <br>\n      <button ion-button> <ion-icon style="margin-right: 5px" name="call"></ion-icon>847-507-5274</button>\n    </ion-item>\n\n    <ion-item style="background-color: #D0D0D0;font-weight: bold"> Prod</ion-item>\n    <ion-item>\n      <ion-icon name="videocam"></ion-icon>\n      Meredith Mackey (Prod Co Chair)\n      <br>\n      <button ion-button> <ion-icon style="margin-right: 5px" name="call"></ion-icon> 248-877-2148 </button>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="videocam"></ion-icon>\n      Jordan Kim (Prod Co Chair)\n      <br>\n      <button ion-button> <ion-icon style="margin-right: 5px" name="call"></ion-icon>253-929-9758</button>\n    </ion-item>\n\n    <ion-item style="background-color: #D0D0D0;font-weight: bold"> CommE</ion-item>\n    <ion-item>\n      <ion-icon name="hand"></ion-icon>\n      Talia Prusky (CommE Chair)\n      <br>\n      <button ion-button> <ion-icon style="margin-right: 5px" name="call"></ion-icon> 484-318-5679 </button>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="hand"></ion-icon>\n      Christina Parker (CommE Chair)\n      <br>\n      <button ion-button> <ion-icon style="margin-right: 5px" name="call"></ion-icon>314-882-5145</button>\n    </ion-item>\n\n\n\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/garrettmatsuda/Documents/NUDM/DMCal/src/pages/contact/contact.html"*/
        })
        // https://ionicframework.com/docs/native/call-number/
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number_ngx__["a" /* CallNumber */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_unique_device_id__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm_ngx__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {Http ,Response } from '@angular/http';






// import { BackgroundMode } from '@ionic-native/background-mode';

// import { IBeacon } from '@ionic-native/ibeacon';

var HomePage = /** @class */ (function () {
    function HomePage(platform, fcm, navCtrl, loadingCtrl, localNotifications, geolocation, http, storage, uniqueDeviceID) {
        //0) Set background mode on
        // this.backgroundMode.enable();
        var _this = this;
        this.platform = platform;
        this.fcm = fcm;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.localNotifications = localNotifications;
        this.geolocation = geolocation;
        this.http = http;
        this.storage = storage;
        this.uniqueDeviceID = uniqueDeviceID;
        this.email = "";
        //1) Get user_id 
        // this.getUUID();
        //2) Check for Notifications every 10 seconds
        this.storage.set('recentNotif', '');
        var user_committee = "N/A";
        var user_name = "N/A";
        //3) Check Notifications
        setInterval(function () {
            _this.checkNotifications();
        }, 30000);
        //4) Get Users Location every 15 minutes
        // setInterval(() => {
        // this.getLocation();
        //   }, 900000);
        // setTimeout(() => {
        // this.trackBeacons();
        // }, 3000);
    }
    HomePage.prototype.getUUID = function () {
        console.log("getUUID called");
        this.uniqueDeviceID.get()
            .then(function (uuid) { return console.log(uuid); })
            .catch(function (error) { return console.log(error); });
    };
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
    HomePage.prototype.checkNotifications = function () {
        var _this = this;
        var response = '';
        var recentNotif;
        //Get recent notification from storage
        this.storage.get('recentNotif').then(function (val) {
            recentNotif = val;
        });
        this.http.get('http://hinckley.cs.northwestern.edu/~rbi054/dm_notification_get.php', {}, {})
            .then(function (data) {
            console.log(data.status);
            // console.log(data.data); // data received by server
            response = data.data;
            console.log("Checking notifications received: " + response.toString());
            // console.log(data.headers);
        })
            .catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
        //Wait Until Notification Comes in
        setTimeout(function () {
            //Check if old notification
            if (recentNotif == response.toString()) {
                //do nothing
                console.log("Old notification!");
            }
            if (recentNotif != response.toString()) {
                console.log("New notification!");
                var notification_body = response.split('\n');
                _this.localNotifications.schedule({
                    id: 1,
                    text: "NUDM 2019: " + notification_body[0].toString(),
                    trigger: { at: new Date(new Date().getTime() + 10) },
                });
                _this.storage.set('recentNotif', response.toString());
            }
        }, 3000);
    };
    HomePage.prototype.updateUser = function (name) {
        this.storage.set("user", name);
    };
    HomePage.prototype.makeId = function () {
        var uuid = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            uuid += possible.charAt(Math.floor(Math.random() * possible.length));
        return uuid;
    };
    HomePage.prototype.getLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            console.log(data.coords.latitude, data.coords.longitude);
            var user_lat = data.coords.latitude;
            var user_long = data.coords.longitude;
            var user_time = data.timestamp;
            var inNorris = false;
            //Check if in Norris
            if ((user_lat >= 42.053687 || user_lat <= 42.053690) && (user_long <= -87.672593 || user_long >= -87.672597)) {
                console.log("User is in Norris");
                inNorris = true;
                // var user_location="Norris";
            }
            else {
                console.log("User is NOT in Norris");
                // var user_location="Not in Tent";
            }
            var userActivity = "footrub";
            var userId = _this.makeId();
            var user_name = "N/A";
            var user_committee = "N/A";
            // this.storage.get('userName').then((val) => {
            //   user_name=val;
            // });
            var body = '{"lat": ' + user_lat.toString() + ', "long": ' + user_long.toString() + ', "Name": ' + user_name + ', "Committee": ' + user_committee + ', "inNorris": ' + inNorris.toString() + ', "timestamp": ' + user_time.toString() + ', "userActivity": ' + userActivity.toString() + '}';
            var header = { "Content-Type": "application/json", data: body };
            _this.http.post('http://hinckley.cs.northwestern.edu/~rbi054/dm_post.php', header, {})
                .then(function (data) {
                console.log(data.status);
                console.log(data.data); // data received by server
                console.log(data.headers);
            })
                .catch(function (error) {
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
            });
        });
    };
    HomePage.prototype.learnMore = function () {
        // this.addNotification();
        //Norris: 42.053689, -87.672595
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'Thank you!'
        });
        loading.present();
        setTimeout(function () {
            //Finish Loader
            loading.dismiss();
        }, 1000);
        this.getLocation();
    };
    HomePage.prototype.addNotification = function () {
        var timenow = new Date();
        var time = new Date(2019, 0, 20, 15, 52);
        console.log("Triggering Notification at " + time);
        console.log("Current Time: " + timenow);
        // Schedule a single notification
        this.localNotifications.clearAll();
        this.localNotifications.schedule({
            id: 3,
            title: 'DMCal',
            text: 'Reminder! Do Your Job!',
            trigger: { at: new Date(2020, 0, 20, 15, 52) },
        });
    };
    HomePage.prototype.presentLoadingText = function () {
        // console.log(this.inputValue)
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'Loading Please Wait...'
        });
        loading.present();
        setTimeout(function () {
            //Finish Loader
            loading.dismiss();
        }, 5000);
        // Data Processing
        document.getElementById('alert_card').style.display = "none";
        var target_email;
        // target_email=this.inputValue;
        target_email = this.email;
        target_email = target_email.toLowerCase();
        console.log("Target Email: " + target_email);
        console.log("Target Email: " + this.email);
        // this.fcm.getToken().then(token => {
        //   console.log(token);
        // });
        //
        // let response = this.fcm.subscribeToTopic('all');
        // console.log(response);
        //Edge Case
        if (target_email == "") {
            console.log("null string");
            document.getElementById('alert_card').style.display = "block";
            document.getElementById("fullCalendar").style.display = "none";
            loading.dismiss();
            return;
        }
        var txt = '';
        // xmlhttp.open("GET","./dm_schedule2.csv",true);
        // xmlhttp.open("GET","http://hinckley.cs.northwestern.edu/~rbi054/get_dmcal.php",true);
        // xmlhttp.send();
        this.http.get('http://hinckley.cs.northwestern.edu/~rbi054/get_dmcal.php', {}, {})
            .then(function (data) {
            console.log(data.status);
            // console.log(data.data); // data received by server
            txt = data.data;
            console.log("DM Full Schedule: " + txt.toString());
            // console.log(data.headers);
        })
            .catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
        ///////BEGINNING OF CODE THAT DYNAMICALLY RENDERS DM MEMBER SCHEDULE////////////////////
        setTimeout(function () {
            console.log("parsing input..");
            var lines = txt.split('\n');
            console.log(lines[1]);
            console.log(lines.length);
            ///Step 1: Find Correct User Email
            var i;
            var email_found = false;
            for (i = 0; i < lines.length; i++) {
                var words = lines[i].split(',');
                console.log("Checking string: " + words[1]);
                if (words[1] == target_email) {
                    //Code to get user Email
                    // this.storage.set('userName', words[1]);
                    //End of code to get user email
                    console.log("found email :" + words[1]);
                    email_found = true;
                    // this.updateUser(words[1].toString());
                    //Fill in calendar (for however many activities exist...)
                    //STEP 1: 4th Column is first activity, User Has words.length-3 activities
                    console.log("This user has " + words.length + "activities");
                    console.log("This user is on the " + words[2] + " committee");
                    //Set Name & Committee
                    // this.user_name=words[1];
                    // this.user_committee=words[2];
                    // console.log(this.user_name,this.user_committee);
                    document.getElementById("welcomeMessage").innerHTML = "Carpe DM, " + words[0].toString() + "! | Your Committee: " + words[2].toString();
                    var a;
                    for (a = 0; a < words.length - 3; a++) {
                        //Render Specific List Item
                        var item_iter = "item" + (a + 1).toString();
                        console.log(item_iter);
                        document.getElementById(item_iter).style.display = "block";
                        //Update Text
                        var activity_info = words[3 + a].split(";");
                        console.log("Start Time: " + activity_info[0]);
                        console.log("End Time: " + activity_info[1]);
                        console.log("Activity: " + activity_info[2]);
                        console.log("Location: " + activity_info[3]);
                        var act_iter = "activity_" + (a + 1).toString();
                        var time_iter = "time_" + (a + 1).toString();
                        var loc_iter = "loc_" + (a + 1).toString();
                        document.getElementById(act_iter).innerHTML = activity_info[2];
                        //Parse Date
                        if (activity_info[0].includes("2019-03-08T")) {
                            activity_info[0] = activity_info[0].replace("2019-03-08T", "Friday ");
                        }
                        if (activity_info[0].includes("2019-03-09T")) {
                            activity_info[0] = activity_info[0].replace("2019-03-09T", "Saturday ");
                        }
                        if (activity_info[1].includes("2019-03-08T")) {
                            activity_info[1] = activity_info[1].replace("2019-03-08T", "Friday ");
                        }
                        if (activity_info[1].includes("2019-03-09T")) {
                            activity_info[1] = activity_info[1].replace("2019-03-09T", "Saturday ");
                        }
                        document.getElementById(time_iter).innerHTML = activity_info[0] + " – " + activity_info[1];
                        document.getElementById(loc_iter).innerHTML = activity_info[3];
                        //Populate Storage
                        // console.log("Begin Populating Storage");
                        // console.log(act_iter.toString());
                        // console.log(activity_info[2].toString());
                        // this.storage.set(act_iter.toString(), activity_info[2].toString());
                        // console.log("STORAGE 1 WORKED");
                        // this.storage.set(time_iter,activity_info[0]+" – "+activity_info[1]);
                        // this.storage.set(loc_iter,activity_info[3]);
                        //Update Icons with for loop by activity name
                        var icon_iter = "icon".concat((a + 1).toString());
                        if (document.getElementById(act_iter).innerHTML.toLowerCase() == "footrub") {
                            document.getElementById(icon_iter).className = "icon icon-md ion-md-medkit";
                        }
                        else if (document.getElementById(act_iter).innerHTML.toLowerCase() == "free") {
                            document.getElementById(icon_iter).className = "icon icon-md ion-md-happy";
                        }
                        else if (document.getElementById(act_iter).innerHTML.toLowerCase() == "food") {
                            document.getElementById(icon_iter).className = "icon icon-md ion-md-pizza";
                        }
                        else if (document.getElementById(act_iter).innerHTML.toLowerCase() == "security") {
                            document.getElementById(icon_iter).className = "icon icon-md ion-md-eye";
                        }
                        else if (document.getElementById(act_iter).innerHTML.toLowerCase() == "bathroom runner") {
                            document.getElementById(icon_iter).className = "icon icon-md ion-md-water";
                        }
                    }
                }
            }
            if (email_found == false) {
                document.getElementById('alert_card').style.display = "block";
                document.getElementById("fullCalendar").style.display = "none";
            }
            else {
                //Lastly, display calendar
                document.getElementById('alert_card').style.display = "none";
                document.getElementById("fullCalendar").style.display = "block";
                email_found = false;
            }
        }, 3000);
        ///////BEGINNING OF CODE THAT DYNAMICALLY RENDERS DM MEMBER SCHEDULE////////////////////
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/garrettmatsuda/Documents/NUDM/DMCal/src/pages/home/home.html"*/'<link href="https://fonts.googleapis.com/css?family=Lato:400,900|Open+Sans" rel="stylesheet">\n\n\n<ion-header>\n  <ion-navbar>\n    <ion-title style="font-family: Lato;font-weight: bold">DMCal</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="text-align: center; font-family: Lato" padding>\n  <ion-img class="image" style="height:16%;width:25%" src="../images/NUDM.png"></ion-img>\n  \n  <h3>\n    Get Your Real-Time NUDM Schedule\n  </h3>\n\n  <ion-list>\n  <ion-item class="input">\n    <ion-label style="width:50%" stacked>Enter Email Address</ion-label>\n    <ion-input type="text" maxlength="50" id="user_email" name="inputValue" [(ngModel)]="email" ></ion-input>\n  </ion-item>\n</ion-list>\n\n  <button style="background-color: #9370DB;font-weight: bold" ion-button (click)="presentLoadingText()"> <ion-icon style="margin-right: 2px" name="calendar"></ion-icon>Generate My Calendar</button>\n\n<div id="alert_card" style="display:none;">\n<ion-card>\n  <ion-card-header style="background-color: #B6465F; color:#ffffff;">\n    Sorry, that email does not appear in our directory! <br> Please try again.\n  </ion-card-header>\n</ion-card>\n</div>\n\n<div id=fullCalendar style="display:none;font-family: Lato"> \n<ion-list>\n  <h5 id="welcomeMessage" style="text-align: middle;margin-top: 3%">Carpe DM! Here\'s your schedule:</h5>\n  <ion-item style="display:none;" id="item1">\n    <ion-row>\n    <ion-col col-2 style="text-align: left">\n      <ion-icon id="icon1" name="medkit"></ion-icon>\n    </ion-col>\n    <ion-col col-6 id="activity_1">\n      Footrub\n    </ion-col>\n    <ion-col col-4 id="loc_1" style="text-align: right">\n      Norris \n    </ion-col>\n    <ion-col col-12 id="time_1" style="margin-left: 20%;font-style: italic">\n      6pm-7pm\n    </ion-col>\n    \n  </ion-row>\n  </ion-item>\n\n   <ion-item style="display:none;" id="item2">\n    <ion-row>\n    <ion-col col-2 style="text-align: left">\n      <ion-icon id="icon2" name="medkit"></ion-icon>\n    </ion-col>\n    <ion-col col-6 id="activity_2">\n      Footrub\n    </ion-col>\n    <ion-col col-4 id="loc_2" style="text-align: right">\n      Norris \n    </ion-col>\n    <ion-col col-12 id="time_2" style="margin-left: 20%;font-style: italic">\n      6pm-7pm\n    </ion-col>\n  </ion-row>\n  </ion-item>\n\n   <ion-item style="display:none;" id="item3">\n    <ion-row>\n    <ion-col col-2 style="text-align: left">\n      <ion-icon id="icon3" name="medkit"></ion-icon>\n    </ion-col>\n    <ion-col col-6 id="activity_3">\n      Footrub\n    </ion-col>\n    <ion-col col-4 id="loc_3" style="text-align: right">\n      Norris \n    </ion-col>\n    <ion-col col-12 id="time_3" style="margin-left: 20%;font-style: italic">\n      6pm-7pm\n    </ion-col>\n  </ion-row>\n  </ion-item>\n\n   <ion-item style="display:none;" id="item4">\n    <ion-row>\n    <ion-col col-2 style="text-align: left">\n      <ion-icon id="icon4" name="medkit"></ion-icon>\n    </ion-col>\n    <ion-col col-6 id="activity_4">\n      Footrub\n    </ion-col>\n    <ion-col col-4 id="loc_4" style="text-align: right">\n      Norris \n    </ion-col>\n    <ion-col col-12 id="time_4" style="margin-left: 20%;font-style: italic">\n      6pm-7pm\n    </ion-col>\n  </ion-row>\n  </ion-item>\n\n\n  <ion-item style="display:none;" id="item5">\n    <ion-row>\n    <ion-col col-2 style="text-align: left">\n      <ion-icon id="icon5" name="medkit"></ion-icon>\n    </ion-col>\n    <ion-col col-6 id="activity_5">\n      Footrub\n    </ion-col>\n    <ion-col col-4 id="loc_5" style="text-align: right">\n      Norris \n    </ion-col>\n    <ion-col col-12 id="time_5" style="margin-left: 20%;font-style: italic">\n      6pm-7pm\n    </ion-col>\n  </ion-row>\n  </ion-item>\n\n  <ion-item style="display:none;" id="item6">\n    <ion-row>\n    <ion-col col-2 style="text-align: left">\n      <ion-icon id="icon6" name="medkit"></ion-icon>\n    </ion-col>\n    <ion-col col-6 id="activity_6">\n      Footrub\n    </ion-col>\n    <ion-col col-4 id="loc_6" style="text-align: right">\n      Norris \n    </ion-col>\n    <ion-col col-12 id="time_6" style="margin-left: 20%;font-style: italic">\n      6pm-7pm\n    </ion-col>\n  </ion-row>\n  </ion-item>\n   \n\n\n  <ion-item style="display:none;" id="item7">\n    <ion-row>\n    <ion-col col-2 style="text-align: left">\n      <ion-icon id="icon7" name="medkit"></ion-icon>\n    </ion-col>\n    <ion-col col-6 id="activity_7">\n      Footrub\n    </ion-col>\n    <ion-col col-4 id="loc_7" style="text-align: right">\n      Norris \n    </ion-col>\n    <ion-col col-12 id="time_7" style="margin-left: 20%;font-style: italic">\n      6pm-7pm\n    </ion-col>\n  </ion-row>\n  </ion-item>\n\n\n  <ion-item style="display:none;" id="item8">\n    <ion-row>\n    <ion-col col-2 style="text-align: left">\n      <ion-icon id="icon8" name="medkit"></ion-icon>\n    </ion-col>\n    <ion-col col-6 id="activity_8">\n      Footrub\n    </ion-col>\n    <ion-col col-4 id="loc_8" style="text-align: right">\n      Norris \n    </ion-col>\n    <ion-col col-12 id="time_8" style="margin-left: 20%;font-style: italic">\n      6pm-7pm\n    </ion-col>\n  </ion-row>\n  </ion-item>\n\n\n <ion-item style="display:none;" id="item9">\n    <ion-row>\n    <ion-col col-2 style="text-align: left">\n      <ion-icon id="icon9" name="medkit"></ion-icon>\n    </ion-col>\n    <ion-col col-6 id="activity_9">\n      Footrub\n    </ion-col>\n    <ion-col col-4 id="loc_9" style="text-align: right">\n      Norris \n    </ion-col>\n    <ion-col col-12 id="time_9" style="margin-left: 20%;font-style: italic">\n      6pm-7pm\n    </ion-col>\n  </ion-row>\n  </ion-item>\n\n\n  <ion-item style="display:none;" id="item10">\n    <ion-row>\n    <ion-col col-2 style="text-align: left">\n      <ion-icon id="icon10" name="medkit"></ion-icon>\n    </ion-col>\n    <ion-col col-6 id="activity_10">\n      Footrub\n    </ion-col>\n    <ion-col col-4 id="loc_10" style="text-align: right">\n      Norris \n    </ion-col>\n    <ion-col col-12 id="time_10" style="margin-left: 20%;font-style: italic">\n      6pm-7pm\n    </ion-col>\n  </ion-row>\n  </ion-item>\n\n\n  <ion-item style="display:none;" id="item11">\n    <ion-row>\n    <ion-col col-2 style="text-align: left">\n      <ion-icon id="icon11" name="medkit"></ion-icon>\n    </ion-col>\n    <ion-col col-6 id="activity_11">\n      Footrub\n    </ion-col>\n    <ion-col col-4 id="loc_11" style="text-align: right">\n      Norris \n    </ion-col>\n    <ion-col col-12 id="time_11" style="margin-left: 20%;font-style: italic">\n      6pm-7pm\n    </ion-col>\n  </ion-row>\n  </ion-item>\n\n\n<ion-item style="display:none;" id="item12">\n    <ion-row>\n    <ion-col col-2 style="text-align: left">\n      <ion-icon id="icon12" name="medkit"></ion-icon>\n    </ion-col>\n    <ion-col col-6 id="activity_12">\n      Footrub\n    </ion-col>\n    <ion-col col-4 id="loc_12" style="text-align: right">\n      Norris \n    </ion-col>\n    <ion-col col-12 id="time_12" style="margin-left: 20%;font-style: italic">\n      6pm-7pm\n    </ion-col>\n  </ion-row>\n  </ion-item>\n\n\n  <ion-item style="display:none;" id="item13">\n    <ion-row>\n    <ion-col col-2 style="text-align: left">\n      <ion-icon id="icon13" name="medkit"></ion-icon>\n    </ion-col>\n    <ion-col col-6 id="activity_13">\n      Footrub\n    </ion-col>\n    <ion-col col-4 id="loc_13" style="text-align: right">\n      Norris \n    </ion-col>\n    <ion-col col-12 id="time_13" style="margin-left: 20%;font-style: italic">\n      6pm-7pm\n    </ion-col>\n  </ion-row>\n  </ion-item>\n\n\n  <ion-item style="display:none;" id="item14">\n    <ion-row>\n    <ion-col col-2 style="text-align: left">\n      <ion-icon id="icon14" name="medkit"></ion-icon>\n    </ion-col>\n    <ion-col col-6 id="activity_14">\n      Footrub\n    </ion-col>\n    <ion-col col-4 id="loc_14" style="text-align: right">\n      Norris \n    </ion-col>\n    <ion-col col-12 id="time_14" style="margin-left: 20%;font-style: italic">\n      6pm-7pm\n    </ion-col>\n  </ion-row>\n  </ion-item>\n\n\n  <ion-item style="display:none;" id="item15">\n    <ion-row>\n    <ion-col col-2 style="text-align: left">\n      <ion-icon id="icon15" name="medkit"></ion-icon>\n    </ion-col>\n    <ion-col col-6 id="activity_15">\n      Footrub\n    </ion-col>\n    <ion-col col-4 id="loc_15" style="text-align: right">\n      Norris \n    </ion-col>\n    <ion-col col-12 id="time_15" style="margin-left: 20%;font-style: italic">\n      6pm-7pm\n    </ion-col>\n  </ion-row>\n  </ion-item>\n\n  <ion-item style="display:none;" id="item16">\n    <ion-row>\n    <ion-col col-2 style="text-align: left">\n      <ion-icon id="icon16" name="medkit"></ion-icon>\n    </ion-col>\n    <ion-col col-6 id="activity_16">\n      Footrub\n    </ion-col>\n    <ion-col col-4 id="loc_16" style="text-align: right">\n      Norris \n    </ion-col>\n    <ion-col col-12 id="time_16" style="margin-left: 20%;font-style: italic">\n      6pm-7pm\n    </ion-col>\n  </ion-row>\n  </ion-item>\n\n  <ion-item style="display:none;" id="item17">\n    <ion-row>\n    <ion-col col-2 style="text-align: left">\n      <ion-icon id="icon17" name="medkit"></ion-icon>\n    </ion-col>\n    <ion-col col-6 id="activity_17">\n      Footrub\n    </ion-col>\n    <ion-col col-4 id="loc_17" style="text-align: right">\n      Norris \n    </ion-col>\n    <ion-col col-12 id="time_17" style="margin-left: 20%;font-style: italic">\n      6pm-7pm\n    </ion-col>\n  </ion-row>\n  </ion-item>\n\n  <ion-item style="display:none;" id="item18">\n    <ion-row>\n    <ion-col col-2 style="text-align: left">\n      <ion-icon id="icon18" name="medkit"></ion-icon>\n    </ion-col>\n    <ion-col col-6 id="activity_18">\n      Footrub\n    </ion-col>\n    <ion-col col-4 id="loc_18" style="text-align: right">\n      Norris \n    </ion-col>\n    <ion-col col-12 id="time_18" style="margin-left: 20%;font-style: italic">\n      6pm-7pm\n    </ion-col>\n  </ion-row>\n  </ion-item>\n\n  <ion-item style="display:none;" id="item19">\n    <ion-row>\n    <ion-col col-2 style="text-align: left">\n      <ion-icon id="icon19" name="medkit"></ion-icon>\n    </ion-col>\n    <ion-col col-6 id="activity_19">\n      Footrub\n    </ion-col>\n    <ion-col col-4 id="loc_19" style="text-align: right">\n      Norris \n    </ion-col>\n    <ion-col col-12 id="time_19" style="margin-left: 20%;font-style: italic">\n      6pm-7pm\n    </ion-col>\n  </ion-row>\n  </ion-item>\n\n  <ion-item style="display:none;" id="item20">\n    <ion-row>\n    <ion-col col-2 style="text-align: left">\n      <ion-icon id="icon20" name="medkit"></ion-icon>\n    </ion-col>\n    <ion-col col-6 id="activity_20">\n      Footrub\n    </ion-col>\n    <ion-col col-4 id="loc_20" style="text-align: right">\n      Norris \n    </ion-col>\n    <ion-col col-12 id="time_20" style="margin-left: 20%;font-style: italic">\n      6pm-7pm\n    </ion-col>\n  </ion-row>\n  </ion-item>\n\n\n\n\n\n\n\n\n</ion-list>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/garrettmatsuda/Documents/NUDM/DMCal/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm_ngx__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_unique_device_id__["a" /* UniqueDeviceID */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(505);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_push__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_local_notifications__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_http__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_background_mode__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_unique_device_id__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_ibeacon__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_call_number_ngx__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_remote_service_remote_service__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_fcm_ngx__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var config = {
    apiKey: "AIzaSyDPDc5FL4VuavAc8FP-X4izGgE_kNpVYcg",
    authDomain: "nudm-staff-app-2.firebaseapp.com",
    databaseURL: "https://nudm-staff-app-2.firebaseio.com",
    projectId: "nudm-staff-app-2",
    storageBucket: "nudm-staff-app-2.appspot.com",
    messagingSenderId: "54297154034"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_ibeacon__["a" /* IBeacon */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_call_number_ngx__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_fcm_ngx__["a" /* FCM */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/garrettmatsuda/Documents/NUDM/DMCal/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/garrettmatsuda/Documents/NUDM/DMCal/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 373,
	"./af.js": 373,
	"./ar": 374,
	"./ar-dz": 375,
	"./ar-dz.js": 375,
	"./ar-kw": 376,
	"./ar-kw.js": 376,
	"./ar-ly": 377,
	"./ar-ly.js": 377,
	"./ar-ma": 378,
	"./ar-ma.js": 378,
	"./ar-sa": 379,
	"./ar-sa.js": 379,
	"./ar-tn": 380,
	"./ar-tn.js": 380,
	"./ar.js": 374,
	"./az": 381,
	"./az.js": 381,
	"./be": 382,
	"./be.js": 382,
	"./bg": 383,
	"./bg.js": 383,
	"./bm": 384,
	"./bm.js": 384,
	"./bn": 385,
	"./bn.js": 385,
	"./bo": 386,
	"./bo.js": 386,
	"./br": 387,
	"./br.js": 387,
	"./bs": 388,
	"./bs.js": 388,
	"./ca": 389,
	"./ca.js": 389,
	"./cs": 390,
	"./cs.js": 390,
	"./cv": 391,
	"./cv.js": 391,
	"./cy": 392,
	"./cy.js": 392,
	"./da": 393,
	"./da.js": 393,
	"./de": 394,
	"./de-at": 395,
	"./de-at.js": 395,
	"./de-ch": 396,
	"./de-ch.js": 396,
	"./de.js": 394,
	"./dv": 397,
	"./dv.js": 397,
	"./el": 398,
	"./el.js": 398,
	"./en-SG": 399,
	"./en-SG.js": 399,
	"./en-au": 400,
	"./en-au.js": 400,
	"./en-ca": 401,
	"./en-ca.js": 401,
	"./en-gb": 402,
	"./en-gb.js": 402,
	"./en-ie": 403,
	"./en-ie.js": 403,
	"./en-il": 404,
	"./en-il.js": 404,
	"./en-nz": 405,
	"./en-nz.js": 405,
	"./eo": 406,
	"./eo.js": 406,
	"./es": 407,
	"./es-do": 408,
	"./es-do.js": 408,
	"./es-us": 409,
	"./es-us.js": 409,
	"./es.js": 407,
	"./et": 410,
	"./et.js": 410,
	"./eu": 411,
	"./eu.js": 411,
	"./fa": 412,
	"./fa.js": 412,
	"./fi": 413,
	"./fi.js": 413,
	"./fo": 414,
	"./fo.js": 414,
	"./fr": 415,
	"./fr-ca": 416,
	"./fr-ca.js": 416,
	"./fr-ch": 417,
	"./fr-ch.js": 417,
	"./fr.js": 415,
	"./fy": 418,
	"./fy.js": 418,
	"./ga": 419,
	"./ga.js": 419,
	"./gd": 420,
	"./gd.js": 420,
	"./gl": 421,
	"./gl.js": 421,
	"./gom-latn": 422,
	"./gom-latn.js": 422,
	"./gu": 423,
	"./gu.js": 423,
	"./he": 424,
	"./he.js": 424,
	"./hi": 425,
	"./hi.js": 425,
	"./hr": 426,
	"./hr.js": 426,
	"./hu": 427,
	"./hu.js": 427,
	"./hy-am": 428,
	"./hy-am.js": 428,
	"./id": 429,
	"./id.js": 429,
	"./is": 430,
	"./is.js": 430,
	"./it": 431,
	"./it-ch": 432,
	"./it-ch.js": 432,
	"./it.js": 431,
	"./ja": 433,
	"./ja.js": 433,
	"./jv": 434,
	"./jv.js": 434,
	"./ka": 435,
	"./ka.js": 435,
	"./kk": 436,
	"./kk.js": 436,
	"./km": 437,
	"./km.js": 437,
	"./kn": 438,
	"./kn.js": 438,
	"./ko": 439,
	"./ko.js": 439,
	"./ku": 440,
	"./ku.js": 440,
	"./ky": 441,
	"./ky.js": 441,
	"./lb": 442,
	"./lb.js": 442,
	"./lo": 443,
	"./lo.js": 443,
	"./lt": 444,
	"./lt.js": 444,
	"./lv": 445,
	"./lv.js": 445,
	"./me": 446,
	"./me.js": 446,
	"./mi": 447,
	"./mi.js": 447,
	"./mk": 448,
	"./mk.js": 448,
	"./ml": 449,
	"./ml.js": 449,
	"./mn": 450,
	"./mn.js": 450,
	"./mr": 451,
	"./mr.js": 451,
	"./ms": 452,
	"./ms-my": 453,
	"./ms-my.js": 453,
	"./ms.js": 452,
	"./mt": 454,
	"./mt.js": 454,
	"./my": 455,
	"./my.js": 455,
	"./nb": 456,
	"./nb.js": 456,
	"./ne": 457,
	"./ne.js": 457,
	"./nl": 458,
	"./nl-be": 459,
	"./nl-be.js": 459,
	"./nl.js": 458,
	"./nn": 460,
	"./nn.js": 460,
	"./pa-in": 461,
	"./pa-in.js": 461,
	"./pl": 462,
	"./pl.js": 462,
	"./pt": 463,
	"./pt-br": 464,
	"./pt-br.js": 464,
	"./pt.js": 463,
	"./ro": 465,
	"./ro.js": 465,
	"./ru": 466,
	"./ru.js": 466,
	"./sd": 467,
	"./sd.js": 467,
	"./se": 468,
	"./se.js": 468,
	"./si": 469,
	"./si.js": 469,
	"./sk": 470,
	"./sk.js": 470,
	"./sl": 471,
	"./sl.js": 471,
	"./sq": 472,
	"./sq.js": 472,
	"./sr": 473,
	"./sr-cyrl": 474,
	"./sr-cyrl.js": 474,
	"./sr.js": 473,
	"./ss": 475,
	"./ss.js": 475,
	"./sv": 476,
	"./sv.js": 476,
	"./sw": 477,
	"./sw.js": 477,
	"./ta": 478,
	"./ta.js": 478,
	"./te": 479,
	"./te.js": 479,
	"./tet": 480,
	"./tet.js": 480,
	"./tg": 481,
	"./tg.js": 481,
	"./th": 482,
	"./th.js": 482,
	"./tl-ph": 483,
	"./tl-ph.js": 483,
	"./tlh": 484,
	"./tlh.js": 484,
	"./tr": 485,
	"./tr.js": 485,
	"./tzl": 486,
	"./tzl.js": 486,
	"./tzm": 487,
	"./tzm-latn": 488,
	"./tzm-latn.js": 488,
	"./tzm.js": 487,
	"./ug-cn": 489,
	"./ug-cn.js": 489,
	"./uk": 490,
	"./uk.js": 490,
	"./ur": 491,
	"./ur.js": 491,
	"./uz": 492,
	"./uz-latn": 493,
	"./uz-latn.js": 493,
	"./uz.js": 492,
	"./vi": 494,
	"./vi.js": 494,
	"./x-pseudo": 495,
	"./x-pseudo.js": 495,
	"./yo": 496,
	"./yo.js": 496,
	"./zh-cn": 497,
	"./zh-cn.js": 497,
	"./zh-hk": 498,
	"./zh-hk.js": 498,
	"./zh-tw": 499,
	"./zh-tw.js": 499
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 856;

/***/ }),

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RemoteServiceProvider = /** @class */ (function () {
    function RemoteServiceProvider(http) {
        this.http = http;
        console.log('Hello RemoteServiceProvider Provider');
    }
    RemoteServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RemoteServiceProvider);
    return RemoteServiceProvider;
}());

//# sourceMappingURL=remote-service.js.map

/***/ })

},[500]);
//# sourceMappingURL=main.js.map