import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ResumoPage } from './resumo.page';
var routes = [
    {
        path: '',
        component: ResumoPage
    }
];
var ResumoPageModule = /** @class */ (function () {
    function ResumoPageModule() {
    }
    ResumoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ResumoPage]
        })
    ], ResumoPageModule);
    return ResumoPageModule;
}());
export { ResumoPageModule };
//# sourceMappingURL=resumo.module.js.map