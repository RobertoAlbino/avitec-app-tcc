import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT } from '../../configs/constants';
import { LoadingService } from '../utils/loading.service';
var EdicaoModal = /** @class */ (function () {
    function EdicaoModal(modalController, navParams, http, loadingService) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.http = http;
        this.loadingService = loadingService;
        this.server = API_ENDPOINT;
        this.uri = 'tabelapadrao';
    }
    EdicaoModal.prototype.ionViewWillEnter = function () {
        this.dia = this.navParams.get('dia');
    };
    EdicaoModal.prototype.dismiss = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.dismiss(this.dia)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EdicaoModal.prototype.salvar = function () {
        var _this = this;
        this.loadingService.present('Salvando suas alterações');
        this.http.put("" + this.server + this.uri, this.dia).subscribe(function (res) {
            _this.loadingService.dismiss();
            if (res.sucesso)
                _this.dismiss();
        });
    };
    EdicaoModal = tslib_1.__decorate([
        Component({
            templateUrl: 'edicao-modal.component.html',
            styleUrls: ['./edicao-modal.component.scss'],
            selector: 'edicao-modal'
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            NavParams,
            HttpClient,
            LoadingService])
    ], EdicaoModal);
    return EdicaoModal;
}());
export { EdicaoModal };
//# sourceMappingURL=edicao-modal.component.js.map