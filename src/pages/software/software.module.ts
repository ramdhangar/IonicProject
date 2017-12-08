import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoftwarePage } from './software';

@NgModule({
  declarations: [
    SoftwarePage,
  ],
  imports: [
    IonicPageModule.forChild(SoftwarePage),
  ],
})
export class SoftwarePageModule {}
