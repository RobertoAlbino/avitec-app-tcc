import * as tslib_1 from "tslib";
import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';
var LoadingService = /** @class */ (function () {
    function LoadingService(loadingController) {
        this.loadingController = loadingController;
        this.loading = false;
    }
    LoadingService.prototype.present = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loader;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        return [4 /*yield*/, this.loadingController.create({
                                message: message,
                                spinner: 'crescent'
                            })];
                    case 1:
                        loader = _a.sent();
                        loader.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoadingService.prototype.dismiss = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = false;
                        return [4 /*yield*/, this.loadingController.dismiss()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadingService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [LoadingController])
    ], LoadingService);
    return LoadingService;
}());
export { LoadingService };
//# sourceMappingURL=loading.service.js.map