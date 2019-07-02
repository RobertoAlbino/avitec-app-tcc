import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HistoricoUmidadePage } from './historico-umidade.page';
var routes = [
    {
        path: '',
        component: HistoricoUmidadePage
    }
];
var HistoricoUmidadePageModule = /** @class */ (function () {
    function HistoricoUmidadePageModule() {
    }
    HistoricoUmidadePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [HistoricoUmidadePage]
        })
    ], HistoricoUmidadePageModule);
    return HistoricoUmidadePageModule;
}());
export { HistoricoUmidadePageModule };
//# sourceMappingURL=historico-umidade.module.js.map