import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SorteadorPage } from './sorteador.page';

const routes: Routes = [
  {
    path: '',
    component: SorteadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SorteadorPageRoutingModule {}
