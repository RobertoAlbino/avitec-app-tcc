import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT } from '../../configs/constants';
import { LoadingService } from '../utils/loading.service';
import { DateUtilsService } from '../utils/dateutils.service';
var HistoricoUmidadePage = /** @class */ (function () {
    function HistoricoUmidadePage(activeRoute, http, loadingService, dateUtils) {
        this.activeRoute = activeRoute;
        this.http = http;
        this.loadingService = loadingService;
        this.dateUtils = dateUtils;
        this.hasError = true;
        this.server = API_ENDPOINT;
        this.uri = 'indicadores/zona/';
    }
    HistoricoUmidadePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.hasError = true;
        this.id = this.activeRoute.snapshot.paramMap.get('id');
        this.loadingService.present('Carregando históricos de umidade da seção selecionada');
        this.executeRequest().subscribe(function (res) {
            if (res.sucesso) {
                _this.historicos = res.objeto;
                _this.historicos.reverse();
                _this.ultimo = _this.historicos[0];
                _this.historicos.splice(0, 1);
                _this.hasError = false;
            }
            else {
                _this.hasError = true;
            }
            _this.loadingService.dismiss();
        });
    };
    HistoricoUmidadePage.prototype.executeRequest = function () {
        return this.http.get("" + this.server + this.uri + this.id);
    };
    HistoricoUmidadePage.prototype.doRefresh = function () {
        var _this = this;
        this.loadingService.present('Atualizando dados de umidade');
        this.executeRequest().subscribe(function (res) {
            if (res.sucesso) {
                _this.historicos = res.objeto;
                _this.ultimo = _this.historicos[0];
                _this.historicos.splice(0, 1);
                _this.hasError = false;
            }
            else {
                _this.hasError = true;
            }
            _this.loadingService.dismiss();
        });
    };
    HistoricoUmidadePage.prototype.formatDate = function (date) {
        return this.dateUtils.formatDate(date);
    };
    HistoricoUmidadePage = tslib_1.__decorate([
        Component({
            selector: 'app-historico-umidade',
            templateUrl: './historico-umidade.page.html',
            styleUrls: ['./historico-umidade.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            HttpClient,
            LoadingService,
            DateUtilsService])
    ], HistoricoUmidadePage);
    return HistoricoUmidadePage;
}());
export { HistoricoUmidadePage };
//# sourceMappingURL=historico-umidade.page.js.map