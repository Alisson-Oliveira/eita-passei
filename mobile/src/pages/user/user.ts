import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  public edit: boolean = false;
  private avatar: string = ''; 
  
  constructor (
    private navCtrl: NavController,
    private navParams: NavParams,
    private configCtrl: ConfigProvider
  ) { } 

  ionViewWillEnter(){
    const response = this.navParams.get('edit'); 
    const data = this.configCtrl.getConfig();

    if (response !== undefined) {
      this.edit = response;

      this.username = data.username;
      this.avatar = data.avatar;

      this.selected = this.systemConvertAvatarId(data.avatar);

      this.chooseAvatar(this.selected);
    }   
  }

  public isSelected(selected: number): void { 
    this.selected = selected;
    this.chooseAvatar(selected);
  }

  private systemConvertAvatarId(path: string): number {
    switch (path) {
      case '../../../assets/avatar/man.png':
        return 1;
      case '../../../assets/avatar/woman.png':
        return 2;
      case '../../../assets/avatar/avatar_1.png':
        return 3;
      default:
        break;
    }    
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

  public systemCancelEdit(): any {
    return this.navCtrl.pop();
  }
}
