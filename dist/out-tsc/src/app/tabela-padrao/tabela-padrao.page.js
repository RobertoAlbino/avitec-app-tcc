import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { API_ENDPOINT } from '../../configs/constants';
import { LoadingService } from '../utils/loading.service';
import { EdicaoModal } from '../edicao-modal/edicao-modal.component';
import { ConfirmationAlertService } from '../utils/confirmation-alert.service';
var TabelaPadraoPage = /** @class */ (function () {
    function TabelaPadraoPage(modalController, http, loadingService, activatedRoute, confirmationAlert) {
        var _this = this;
        this.modalController = modalController;
        this.http = http;
        this.loadingService = loadingService;
        this.activatedRoute = activatedRoute;
        this.confirmationAlert = confirmationAlert;
        this.server = API_ENDPOINT;
        this.uri = 'tabelapadrao';
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.canEdit = (params.get('canEdit') == 'true');
        });
    }
    TabelaPadraoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingService.present('Carregando tabela registrada para seu aviário');
        this.http.get("" + this.server + this.uri).subscribe(function (res) {
            if (res.sucesso) {
                _this.dias = res.objeto;
            }
            _this.loadingService.dismiss();
        });
    };
    TabelaPadraoPage.prototype.voltarPadrao = function () {
        var _this = this;
        this.confirmationAlert.present('Atenção', 'Você tem certeza de que deseja voltar para os valores padrão?', function (confirm) {
            if (confirm)
                _this.voltar();
        });
    };
    TabelaPadraoPage.prototype.voltar = function () {
        var _this = this;
        this.loadingService.present('Desfazendo alterações na tabela');
        this.http.put("" + this.server + this.uri + "/reset", {}).subscribe(function (res) {
            if (res.sucesso) {
                _this.dias = res.objeto;
                _this.loadingService.dismiss();
            }
        });
    };
    TabelaPadraoPage.prototype.editar = function (dia) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.canEdit)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.modalController.create({
                                component: EdicaoModal,
                                componentProps: {
                                    'dia': dia
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TabelaPadraoPage = tslib_1.__decorate([
        Component({
            selector: 'app-tabela-padrao',
            templateUrl: './tabela-padrao.page.html',
            styleUrls: ['./tabela-padrao.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            HttpClient,
            LoadingService,
            ActivatedRoute,
            ConfirmationAlertService])
    ], TabelaPadraoPage);
    return TabelaPadraoPage;
}());
export { TabelaPadraoPage };
//# sourceMappingURL=tabela-padrao.page.js.map