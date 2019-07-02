import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabelaPadraoPage } from './tabela-padrao.page';
import { EdicaoModalModule } from '../edicao-modal/edicao-modal.module';

const routes: Routes = [
  {
    path: '',
    component: TabelaPadraoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    EdicaoModalModule
  ],
  declarations: [TabelaPadraoPage]
})
export class TabelaPadraoPageModule {}
