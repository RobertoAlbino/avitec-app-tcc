import * as tslib_1 from "tslib";
import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
var ConfirmationAlertService = /** @class */ (function () {
    function ConfirmationAlertService(alertController) {
        this.alertController = alertController;
    }
    ConfirmationAlertService.prototype.present = function (header, message, handler) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: message,
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function () {
                                        handler(false);
                                    }
                                },
                                {
                                    text: 'Confirmar',
                                    handler: function () {
                                        handler(true);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfirmationAlertService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AlertController])
    ], ConfirmationAlertService);
    return ConfirmationAlertService;
}());
export { ConfirmationAlertService };
//# sourceMappingURL=confirmation-alert.service.js.map