DMCal - An App for DM Committee Members to View In-Tent Schedule
Authors: Robbie Belson and Jackson Schuster


To install RemoteService dependency:


```
ionic g provider RemoteService
```

Install push notification dependencies:

```
sudo npm i -g cordova
ionic cordova plugin add phonegap-plugin-push
npm install --save @ionic-native/push

ionic cordova plugin add cordova-plugin-local-notification
npm install --save @ionic-native/local-notifications
```

Install geolocation support:
```
ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION="To locate you"
npm install --save @ionic-native/geolocation
```

Install http requests:
```
ionic cordova plugin add cordova-plugin-advanced-http
npm install --save @ionic-native/http
```

Install charts.js:
```
npm install chart.js --save
npm install ng2-charts --save
```

Install storage:
```
ionic cordova plugin add cordova-sqlite-storage
npm install --save @ionic/storage
```

Install background mode:
```
ionic cordova plugin add cordova-plugin-background-mode
npm install --save @ionic-native/background-mode
```

Install uuid:
```
ionic cordova plugin add cordova-plugin-uniquedeviceid
npm install --save @ionic-native/unique-device-id
```
