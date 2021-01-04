import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConfigProvider } from '../../../providers/config';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers: [
    ConfigProvider
  ]
})
export class DetailsPage {

  public subject = [];

  constructor (
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public configCtrl: ConfigProvider,
  ) { 
    this.subject = navParams.get('item');;

    console.log(this.subject);
  }

  public alert() {
    alert("Em breve...");
  }

}
