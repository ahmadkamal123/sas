
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import {NewPage} from '../new/new';
import { PopoverPage } from '../about-popover/about-popover';
import {MapPage} from '../map/map';
import {SpeakerListPage} from '../speaker-list/speaker-list';
import {AboutPage} from '../about/about';
import {NewPage3Page} from '../new-page3/new-page3';
@IonicPage()
@Component({
 selector: 'page-schedule',
  templateUrl: 'schedule.html'
})

export class SchedulePage {



  
  conferenceDate = '2047-05-17';
  newPage = NewPage;
  mapPage = MapPage;
  speakerListPage = SpeakerListPage;
  aboutPage = AboutPage;
  newPage3Page = NewPage3Page
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public navParams: NavParams) {
   
  }

    ionViewDidLoad() {
    console.log('SchedulePage');
  }

 presentPopover(event: Event) {
  let popover = this.popoverCtrl.create(PopoverPage);
   popover.present({ ev: event });

  } 
} 