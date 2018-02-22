import { Component } from '@angular/core';

import { PopoverController, NavController, LoadingController } from 'ionic-angular';

import { PopoverPage } from '../about-popover/about-popover';

import {NewPage4Page} from '../new-page4/new-page4';


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  constructor(public popoverCtrl: PopoverController, public navCtrl: NavController, public loadingCtrl: LoadingController) { }

 presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
}


newPage4Page(){

  let loader = this.loadingCtrl.create({
    spinner: "crescent",
    content: "Please wait...",
    duration: 3000
  });

  loader.present();

 this.navCtrl.push(NewPage4Page);

}





}