import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage() 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  public calcular() {
    this.navCtrl.push('CalcularPage');
  } 
  
  public alert() {
    alert("Em breve...");
  }

}
