import { Component } from '@angular/core';
import { PopoverController, IonicPage } from 'ionic-angular';
import { PopoverPage } from '../about-popover/about-popover';
import {NewPage3Page} from '../new-page3/new-page3';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  conferenceDate = '2047-05-17';
  newPage3Page = NewPage3Page;

  constructor(public popoverCtrl: PopoverController) { }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }


 
 
  } 

