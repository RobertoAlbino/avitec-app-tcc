import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EdicaoModal } from './edicao-modal.component';
var EdicaoModalModule = /** @class */ (function () {
    function EdicaoModalModule() {
    }
    EdicaoModalModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                EdicaoModal
            ],
            imports: [
                IonicModule,
                CommonModule,
                FormsModule
            ],
            entryComponents: [
                EdicaoModal
            ]
        })
    ], EdicaoModalModule);
    return EdicaoModalModule;
}());
export { EdicaoModalModule };
//# sourceMappingURL=edicao-modal.module.js.map