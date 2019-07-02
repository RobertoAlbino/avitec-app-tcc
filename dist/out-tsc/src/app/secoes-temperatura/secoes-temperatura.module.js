import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SecoesTemperaturaPage } from './secoes-temperatura.page';
var routes = [
    {
        path: '',
        component: SecoesTemperaturaPage
    }
];
var SecoesTemperaturaPageModule = /** @class */ (function () {
    function SecoesTemperaturaPageModule() {
    }
    SecoesTemperaturaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SecoesTemperaturaPage]
        })
    ], SecoesTemperaturaPageModule);
    return SecoesTemperaturaPageModule;
}());
export { SecoesTemperaturaPageModule };
//# sourceMappingURL=secoes-temperatura.module.js.map