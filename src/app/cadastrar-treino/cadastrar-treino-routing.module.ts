import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarTreinoPage } from './cadastrar-treino.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarTreinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarTreinoPageRoutingModule {}
