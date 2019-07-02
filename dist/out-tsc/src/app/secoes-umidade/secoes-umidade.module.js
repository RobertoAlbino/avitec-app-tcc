import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SecoesUmidadePage } from './secoes-umidade.page';
var routes = [
    {
        path: '',
        component: SecoesUmidadePage
    }
];
var SecoesUmidadePageModule = /** @class */ (function () {
    function SecoesUmidadePageModule() {
    }
    SecoesUmidadePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SecoesUmidadePage]
        })
    ], SecoesUmidadePageModule);
    return SecoesUmidadePageModule;
}());
export { SecoesUmidadePageModule };
//# sourceMappingURL=secoes-umidade.module.js.map