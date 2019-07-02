import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SecoesTemperaturaPage } from './secoes-temperatura.page';

const routes: Routes = [
  {
    path: '',
    component: SecoesTemperaturaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SecoesTemperaturaPage]
})
export class SecoesTemperaturaPageModule {}
