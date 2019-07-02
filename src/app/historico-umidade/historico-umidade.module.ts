import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistoricoUmidadePage } from './historico-umidade.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoUmidadePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HistoricoUmidadePage]
})
export class HistoricoUmidadePageModule {}
