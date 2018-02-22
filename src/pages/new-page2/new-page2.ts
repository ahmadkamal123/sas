import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

/**
 * Generated class for the NewPage2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
import { PopoverPage } from '../about-popover/about-popover';

@IonicPage()
@Component({
  selector: 'page-new-page2',
  templateUrl: 'new-page2.html',
})
export class NewPage2Page {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage2Page');
  }


   presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
}

}
