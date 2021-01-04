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
  public subjects: Array<any> = [
    {
      id: 0,
      matter: 'Banco de Dados',
      teacher: 'Marco',
      overallAverage: '7.0',
      grades: [
        {
          id: 1,
          grade: '10.0',
          weight: 1, 
        },
        {
          id: 2,
          grade: '9.0',
          weight: 2, 
        },
        {
          id: 3,
          grade: '10.0',
          weight: 3, 
        },
        {
          id: 4,
          grade: '9.0',
          weight: 2, 
        }
      ]
    },
  ];

  constructor ( 
    private navCtrl: NavController,
    private configCtrl: ConfigProvider, 
  ) { 
    const response = this.configCtrl.getConfig();

    this.username = response.username;
//    this.matters = response.materias;
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
