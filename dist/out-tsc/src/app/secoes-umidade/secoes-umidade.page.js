import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { API_ENDPOINT } from '../../configs/constants';
import { LoadingService } from '../utils/loading.service';
import { NavController } from '@ionic/angular';
import { DateUtilsService } from '../utils/dateutils.service';
import { SortService } from '../utils/sort.service';
var SecoesUmidadePage = /** @class */ (function () {
    function SecoesUmidadePage(http, navCtrl, loadingService, dateUtils, router, sortService) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.loadingService = loadingService;
        this.dateUtils = dateUtils;
        this.router = router;
        this.sortService = sortService;
        this.server = API_ENDPOINT;
        this.uri = 'indicadores/ultimos';
    }
    SecoesUmidadePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.loadingService.present('Carregando dados de umidade');
        this.executeRequest().subscribe(function (res) {
            if (res.sucesso) {
                _this.dados = res.objeto;
                _this.sortService.sortBy(_this.dados, 'zona');
            }
            _this.loadingService.dismiss();
        });
    };
    SecoesUmidadePage.prototype.executeRequest = function () {
        return this.http.get("" + this.server + this.uri);
    };
    SecoesUmidadePage.prototype.doRefresh = function () {
        var _this = this;
        this.loadingService.present('Atualizando dados de umidade');
        this.executeRequest().subscribe(function (res) {
            if (res.sucesso) {
                _this.dados = res.objeto;
            }
            _this.loadingService.dismiss();
        });
    };
    SecoesUmidadePage.prototype.verHistoricos = function (id) {
        this.router.navigateByUrl("/historico-umidade/" + id);
    };
    SecoesUmidadePage = tslib_1.__decorate([
        Component({
            selector: 'app-secoes-umidade',
            templateUrl: './secoes-umidade.page.html',
            styleUrls: ['./secoes-umidade.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            NavController,
            LoadingService,
            DateUtilsService,
            Router,
            SortService])
    ], SecoesUmidadePage);
    return SecoesUmidadePage;
}());
export { SecoesUmidadePage };
//# sourceMappingURL=secoes-umidade.page.js.map