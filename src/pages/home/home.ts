import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  viewSchedule() {
    make_calendar()
    document.getElementById("fullCalendar").style.display = "block";

  }

}



function make_calendar() {
  var INTERVAL_LENGTH = 15;
  var NUM_OF_INTERVALS = (30 * 60) / INTERVAL_LENGTH
  var START_HOUR = 6;
  var calen = document.getElementById("fullCalendar");
  var ionlist = document.createElement("ion-list");

  var time = new Date();


  // update to only do it for the upcoming events
  // for (var i = 0; i<NUM_OF_INTERVALS; i++) {
  // }
  var activities = ["Foot Rubbing", "Free", "Free", "Free", "Foot Rubbing"];
  for (var i = 0; i < activities.length; i++) {


    var ion_item = document.createElement("ion-item");
    var ion_ava = document.createElement("ion-avatar");
    ion_ava.setAttribute("item-start", "");
    var ion_ico = document.createElement("ion-icon");
    var act_name = document.createElement("h2");
    var act_time = document.createElement("p");

    act_name.innerHTML = activities[i];
    switch (activities[i]) {
      case "Free":
        ion_ico.setAttribute("name", "happy");
        break;
      case "Foot Rubbing":
        ion_ico.setAttribute("name", "medkit");
        break;

    }

    act_name.setAttribute("id", "activity_".concat(i.toString()));
    var time1 = (6 + Math.floor(i * 4)).toString().concat(":".concat((15 * (i % 4)).toString()));
    var time2 = (6 + Math.floor((i + 1) * 4)).toString().concat(":".concat((15 * ((i + 1) % 4)).toString()));
    act_time.innerHTML = time1.concat(" - ".concat(time2));

    ion_ava.appendChild(ion_ico);
    ion_item.appendChild(ion_ava);
    ion_item.appendChild(act_name);
    ion_item.appendChild(act_time);

    ionlist.appendChild(ion_item);
  }
  calen.appendChild(ionlist);
}