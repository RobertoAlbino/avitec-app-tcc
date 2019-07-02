import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabelaPadraoPage } from './tabela-padrao.page';
import { EdicaoModalModule } from '../edicao-modal/edicao-modal.module';
var routes = [
    {
        path: '',
        component: TabelaPadraoPage
    }
];
var TabelaPadraoPageModule = /** @class */ (function () {
    function TabelaPadraoPageModule() {
    }
    TabelaPadraoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                EdicaoModalModule
            ],
            declarations: [TabelaPadraoPage]
        })
    ], TabelaPadraoPageModule);
    return TabelaPadraoPageModule;
}());
export { TabelaPadraoPageModule };
//# sourceMappingURL=tabela-padrao.module.js.map