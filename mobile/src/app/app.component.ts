import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ConfigProvider } from '../providers/config';

@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider,
  ]
})
export class MyApp {
  public rootPage: string = ''; 

  constructor (
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    configCtrl: ConfigProvider
  ) {
    platform.ready().then(() => {

      const response = configCtrl.getConfig(); 

      if (response.install) {
        this.rootPage = 'TabsPage';
      } else {
        this.rootPage = 'UserPage';
      }

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.overlaysWebView(false);
      statusBar.backgroundColorByHexString('#000000');
      splashScreen.hide();
    }); 
  }
} 