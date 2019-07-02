import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SecoesUmidadePage } from './secoes-umidade.page';

const routes: Routes = [
  {
    path: '',
    component: SecoesUmidadePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SecoesUmidadePage]
})
export class SecoesUmidadePageModule {}
