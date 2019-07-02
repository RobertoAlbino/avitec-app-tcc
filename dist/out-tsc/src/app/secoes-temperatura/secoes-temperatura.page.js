import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { API_ENDPOINT } from '../../configs/constants';
import { LoadingService } from '../utils/loading.service';
import { NavController } from '@ionic/angular';
import { DateUtilsService } from '../utils/dateutils.service';
import { SortService } from '../utils/sort.service';
var SecoesTemperaturaPage = /** @class */ (function () {
    function SecoesTemperaturaPage(http, navCtrl, loadingService, router, dateUtils, sortService) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.loadingService = loadingService;
        this.router = router;
        this.dateUtils = dateUtils;
        this.sortService = sortService;
        this.server = API_ENDPOINT;
        this.uri = 'indicadores/ultimos';
    }
    SecoesTemperaturaPage.prototype.ionViewDidEnter = function () {
        this.load();
    };
    SecoesTemperaturaPage.prototype.load = function () {
        var _this = this;
        this.loadingService.present('Carregando dados de temperatura');
        this.executeRequest().subscribe(function (res) {
            if (res.sucesso) {
                _this.dados = res.objeto;
                _this.sortService.sortBy(_this.dados, 'zona');
            }
            _this.loadingService.dismiss();
        });
    };
    SecoesTemperaturaPage.prototype.executeRequest = function () {
        return this.http.get("" + this.server + this.uri);
    };
    SecoesTemperaturaPage.prototype.doRefresh = function () {
        var _this = this;
        this.loadingService.present('Atualizando dados de temperatura');
        this.executeRequest().subscribe(function (res) {
            if (res.sucesso) {
                _this.dados = res.objeto;
            }
            _this.loadingService.dismiss();
        });
    };
    SecoesTemperaturaPage.prototype.verHistorico = function (id) {
        this.router.navigateByUrl("/historico-temperatura/" + id);
    };
    SecoesTemperaturaPage = tslib_1.__decorate([
        Component({
            selector: 'app-secoes-temperatura',
            templateUrl: './secoes-temperatura.page.html',
            styleUrls: ['./secoes-temperatura.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            NavController,
            LoadingService,
            Router,
            DateUtilsService,
            SortService])
    ], SecoesTemperaturaPage);
    return SecoesTemperaturaPage;
}());
export { SecoesTemperaturaPage };
//# sourceMappingURL=secoes-temperatura.page.js.map