import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({ 
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public openHome() { 
    return this.navCtrl.setRoot('HomePage');
  }

  public backEnsino() {
    return this.navCtrl.setRoot('EnsinoPage');
  }
}
