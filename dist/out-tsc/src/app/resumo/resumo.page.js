import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT } from 'src/configs/constants';
var ResumoPage = /** @class */ (function () {
    function ResumoPage(activatedRoute, http) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.loteId = params.get('loteId');
        });
        this.server = API_ENDPOINT;
        this.uri = '/lotes/finalizar/info';
    }
    ResumoPage.prototype.ngOnInit = function () {
        console.log(this.loteId);
        this.http.get("" + this.server + this.loteId + this.uri, {}).subscribe(function (res) {
            if (res.sucesso) {
                console.log(res.objeto);
            }
        });
        this.montaGraficoTemperatura();
        this.montaGraficoUmidade();
    };
    ResumoPage.prototype.montaGraficoTemperatura = function () {
        this.chartTemperatura = new Chart(this.temperaturaLineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["1", "2", "3", "4", "5", "6", "7"],
                datasets: [
                    {
                        label: "Temperatura",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "green",
                        borderColor: "green",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "green",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "green",
                        pointHoverBorderColor: "green",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [35, 30, 30, 28.1, 27, 26, 21],
                        spanGaps: false,
                    },
                    {
                        label: "Umidade",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 70, 68, 72, 90, 51.2, 64.2],
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    ResumoPage.prototype.montaGraficoUmidade = function () {
        this.chartUmidade = new Chart(this.umidadeLineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["1", "2", "3", "4", "5", "6", "7"],
                datasets: [
                    {
                        label: "Temperatura",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "green",
                        borderColor: "green",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "green",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "green",
                        pointHoverBorderColor: "green",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [35, 30, 30, 28.1, 27, 26, 21],
                        spanGaps: false,
                    },
                    {
                        label: "Umidade",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 70, 68, 72, 90, 51.2, 64.2],
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    tslib_1.__decorate([
        ViewChild('temperaturaLineCanvas'),
        tslib_1.__metadata("design:type", Object)
    ], ResumoPage.prototype, "temperaturaLineCanvas", void 0);
    tslib_1.__decorate([
        ViewChild('umidadeLineCanvas'),
        tslib_1.__metadata("design:type", Object)
    ], ResumoPage.prototype, "umidadeLineCanvas", void 0);
    ResumoPage = tslib_1.__decorate([
        Component({
            selector: 'app-resumo',
            templateUrl: './resumo.page.html',
            styleUrls: ['./resumo.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, HttpClient])
    ], ResumoPage);
    return ResumoPage;
}());
export { ResumoPage };
//# sourceMappingURL=resumo.page.js.map