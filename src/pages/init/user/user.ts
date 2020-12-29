import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({ 
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  public active: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  public isActive(state: boolean): boolean {
    this.active = state;

    return state; 
  }

  public openHome() { 
    return this.navCtrl.setRoot('TabsPage');
  }

  public backEnsino() {
    return this.navCtrl.setRoot('EnsinoPage');
  }
}
