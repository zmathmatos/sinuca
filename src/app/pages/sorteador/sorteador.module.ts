import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SorteadorPageRoutingModule } from './sorteador-routing.module';

import { SorteadorPage } from './sorteador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SorteadorPageRoutingModule
  ],
  declarations: [SorteadorPage]
})
export class SorteadorPageModule {}
