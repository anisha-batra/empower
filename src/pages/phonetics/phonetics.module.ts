import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneticsPage } from './phonetics';

@NgModule({
  declarations: [
    PhoneticsPage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneticsPage),
  ],
})
export class PhoneticsPageModule {}
