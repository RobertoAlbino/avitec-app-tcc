import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'secoes-temperatura', loadChildren: './secoes-temperatura/secoes-temperatura.module#SecoesTemperaturaPageModule' },
  { path: 'secoes-umidade', loadChildren: './secoes-umidade/secoes-umidade.module#SecoesUmidadePageModule' },
  { path: 'historico-temperatura/:id', loadChildren: './historico-temperatura/historico-temperatura.module#HistoricoTemperaturaPageModule' },
  { path: 'historico-umidade/:id', loadChildren: './historico-umidade/historico-umidade.module#HistoricoUmidadePageModule' },
  { path: 'tabela-padrao', loadChildren: './tabela-padrao/tabela-padrao.module#TabelaPadraoPageModule' },
  { path: 'resumo', loadChildren: './resumo/resumo.module#ResumoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
