import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasseiosPageRoutingModule } from './passeios-routing.module';

import { PasseiosPage } from './passeios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasseiosPageRoutingModule
  ],
  declarations: [PasseiosPage]
})
export class PasseiosPageModule {}
