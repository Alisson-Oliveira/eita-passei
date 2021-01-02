import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage() 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }
  
  public alert() {
    alert("Em breve...");
  }

  public handleToPlus() {
    this.navCtrl.push('PlusPage');
  }

}
