import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { ConfigProvider } from '../../providers/config';

@IonicPage() 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    ConfigProvider,
  ] 
})
export class HomePage {
  
  public username: string = '';
  public subjects: Array<any> = []; 

  constructor ( 
    private navCtrl: NavController, 
    private configCtrl: ConfigProvider, 
  ) { }
  
  ionViewWillEnter() {
    const response = this.configCtrl.getConfig();
    this.username = response.username;
    this.subjects = response.materias;
  }
 
  public alert() { 
    alert("Em breve...");
  }

  public handleToPlus() {
    this.navCtrl.push('PlusPage');
  }

  public handleToDetails(item: any) {
    this.navCtrl.push('DetailsPage', { item });
  }

}
