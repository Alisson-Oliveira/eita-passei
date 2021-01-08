import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConfigProvider } from '../../providers/config';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers: [
    ConfigProvider,
  ]
})
export class SettingsPage {

  public username: string = ''; 
  public avatar: string = '';

  constructor ( 
    private navCtrl: NavController, 
    private configCtrl: ConfigProvider,
  ) { }

  ionViewWillEnter() {
    const response = this.configCtrl.getConfig();
    this.username = response.username;
    this.avatar = response.avatar;
  }

  public handleToEdit() {
    this.navCtrl.push('UserPage', { edit: true }); 
  }
 
}
