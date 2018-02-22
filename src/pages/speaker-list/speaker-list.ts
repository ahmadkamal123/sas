import { Component } from '@angular/core';
import {  PopoverController, NavController, IonicPage, LoadingController } from 'ionic-angular';
import { PopoverPage } from '../about-popover/about-popover';
import {NewPage2Page} from '../new-page2/new-page2';

@IonicPage()
@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html'
})

export class SpeakerListPage {
  conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController, public navCtrl: NavController, public loadingCtrl: LoadingController ) { }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }

newPage2Page(){

  let loader = this.loadingCtrl.create({
    spinner: "crescent",
    content: "Please wait...",
    duration: 4000
  });

  loader.present();

 this.navCtrl.push(NewPage2Page);

}
 
 
  } 

