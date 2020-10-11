import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  public tab1Root: string = 'HomePage';
  public tab2Root: string = 'CalcularPage';
  public tab3Root: string = 'SettingsPage';

  constructor() { }

}
