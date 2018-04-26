import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TentativasPage } from './tentativas';

@NgModule({
  declarations: [
    TentativasPage,
  ],
  imports: [
    IonicPageModule.forChild(TentativasPage),
  ],
})
export class TentativasPageModule {}
