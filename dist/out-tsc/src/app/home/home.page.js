import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { API_ENDPOINT } from '../../configs/constants';
import { LoadingService } from '../utils/loading.service';
var HomePage = /** @class */ (function () {
    function HomePage(loadingService, navController, http, storage, router) {
        this.loadingService = loadingService;
        this.navController = navController;
        this.http = http;
        this.storage = storage;
        this.router = router;
        this.server = API_ENDPOINT;
        this.uri = 'lotes/iniciar';
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('loteAtivo').then(function (val) {
            if (val) {
                _this.navController.navigateRoot('/dashboard');
            }
        });
    };
    HomePage.prototype.verTabela = function () {
        this.router.navigate(['tabela-padrao', { 'canEdit': true }]);
    };
    HomePage.prototype.iniciarLote = function () {
        var _this = this;
        this.loadingService.present('Iniciando configuração de lote');
        this.http.post("" + this.server + this.uri, {}).subscribe(function (res) {
            if (res.sucesso) {
                _this.storage.set('loteAtivo', true);
                _this.storage.set('loteId', res.objeto.id);
                _this.loadingService.dismiss();
                _this.navController.navigateRoot('/dashboard');
            }
        });
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [LoadingService,
            NavController,
            HttpClient,
            Storage,
            Router])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map