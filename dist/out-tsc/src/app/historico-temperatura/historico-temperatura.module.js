import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HistoricoTemperaturaPage } from './historico-temperatura.page';
var routes = [
    {
        path: '',
        component: HistoricoTemperaturaPage
    }
];
var HistoricoTemperaturaPageModule = /** @class */ (function () {
    function HistoricoTemperaturaPageModule() {
    }
    HistoricoTemperaturaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [HistoricoTemperaturaPage]
        })
    ], HistoricoTemperaturaPageModule);
    return HistoricoTemperaturaPageModule;
}());
export { HistoricoTemperaturaPageModule };
//# sourceMappingURL=historico-temperatura.module.js.map