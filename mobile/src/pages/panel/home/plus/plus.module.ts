import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlusPage } from './plus';

@NgModule({
  declarations: [
    PlusPage,
  ],
  imports: [
    IonicPageModule.forChild(PlusPage),
  ],
  exports: [
    PlusPage
  ]
})
export class PlusPageModule {}
