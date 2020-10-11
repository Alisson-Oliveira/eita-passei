import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ensino',
  templateUrl: 'ensino.html',
})
export class EnsinoPage { 

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public openUser() {
    return this.navCtrl.setRoot('UserPage');
  }
 
}