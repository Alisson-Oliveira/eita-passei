import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnsinoPage } from './ensino';

@NgModule({
  declarations: [
    EnsinoPage,
  ],
  imports: [
    IonicPageModule.forChild(EnsinoPage),
  ],
  exports: [
    EnsinoPage,
  ], 
})
export class EnsinoPageModule {}
