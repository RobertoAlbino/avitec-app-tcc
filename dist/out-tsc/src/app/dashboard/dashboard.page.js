import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { API_ENDPOINT } from '../../configs/constants';
import { LoadingService } from '../utils/loading.service';
import { ConfirmationAlertService } from '../utils/confirmation-alert.service';
var DashboardPage = /** @class */ (function () {
    function DashboardPage(http, loadingService, navCtrl, router, storage, confirmationAlert) {
        this.http = http;
        this.loadingService = loadingService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.storage = storage;
        this.confirmationAlert = confirmationAlert;
        this.server = API_ENDPOINT;
        this.uri = 'lotes/finalizar';
    }
    DashboardPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('loteId').then(function (val) {
            if (val)
                _this.loteId = val;
        });
    };
    DashboardPage.prototype.verTabela = function () {
        this.router.navigate(['tabela-padrao', { 'canEdit': false }]);
    };
    DashboardPage.prototype.encerrarLote = function () {
        var _this = this;
        this.confirmationAlert.present('Atenção', 'Você tem certeza de que deseja encerrar o lote?', function (confirm) {
            if (confirm)
                _this.encerra();
        });
    };
    DashboardPage.prototype.encerra = function () {
        var _this = this;
        this.loadingService.present('Finalizando lote');
        this.http.put("" + this.server + this.uri, {}).subscribe(function (res) {
            if (res.sucesso) {
                _this.loadingService.dismiss();
                _this.navCtrl.navigateRoot('/home');
                _this.storage.set('loteAtivo', false);
                _this.navCtrl.navigateRoot(['/resumo', { 'loteId': _this.loteId || null }]);
            }
        });
    };
    DashboardPage.prototype.verTemperatura = function () {
        this.router.navigateByUrl('/secoes-temperatura');
    };
    DashboardPage.prototype.verUmidade = function () {
        this.router.navigateByUrl('/secoes-umidade');
    };
    DashboardPage = tslib_1.__decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.page.html',
            styleUrls: ['./dashboard.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            LoadingService,
            NavController,
            Router,
            Storage,
            ConfirmationAlertService])
    ], DashboardPage);
    return DashboardPage;
}());
export { DashboardPage };
//# sourceMappingURL=dashboard.page.js.map