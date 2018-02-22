import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

/**
 * Generated class for the NewPage3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
import { PopoverPage } from '../about-popover/about-popover';

@IonicPage()
@Component({
  selector: 'page-new-page3',
  templateUrl: 'new-page3.html',
})
export class NewPage3Page {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage3Page');
  }


   presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
}

}
