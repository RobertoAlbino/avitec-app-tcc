import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map