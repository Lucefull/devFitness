import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarTreinoPageRoutingModule } from './cadastrar-treino-routing.module';

import { CadastrarTreinoPage } from './cadastrar-treino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarTreinoPageRoutingModule
  ],
  declarations: [CadastrarTreinoPage]
})
export class CadastrarTreinoPageModule {}
