import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { ConfigProvider } from '../../providers/config';

@IonicPage()
@Component({ 
  selector: 'page-user',
  templateUrl: 'user.html',
  providers: [
    ConfigProvider,
  ]
})
export class UserPage {

  public selected: number = 0;
  public username: string = '';
  private avatar: string = ''; 
  
  constructor (
    private navCtrl: NavController,
    private configCtrl: ConfigProvider
  ) { }

  public isSelected(selected: number): void { 
    this.selected = selected;
    this.chooseAvatar(selected);
  }

  private chooseAvatar(index: number): void {
    switch (index) {
      case 1:
        this.avatar = '../../../assets/avatar/man.png';
        break;
      case 2:
        this.avatar = '../../../assets/avatar/woman.png';
        break;
      case 3:
        this.avatar = '../../../assets/avatar/avatar_1.png';
        break;
      default:
        this.avatar = '';
        break;
    }
  }

  public systemSaveConfig(): boolean {
    if (this.avatar === '' && this.username === '') {
      alert('Por favor, informe seu avatar e seu nome.');

      return false;
    }

    if (this.avatar === '') {
      alert('Por favor, selecione um avatar.');

      return false;
    }

    if (this.username === '') {
      alert('Por favor, informe seu nome.');

      return false;
    }

    this.configCtrl.setConfig(this.username, this.avatar, [], true);

    return true;
  }

  public systemOpenHomePage(): any { 
    return this.systemSaveConfig() && this.navCtrl.setRoot('TabsPage');
  }
}
