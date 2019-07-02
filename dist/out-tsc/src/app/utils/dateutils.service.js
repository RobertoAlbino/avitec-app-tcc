import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as moment from 'moment';
var DateUtilsService = /** @class */ (function () {
    function DateUtilsService() {
    }
    DateUtilsService.prototype.formatDate = function (date) {
        return moment(date).format('DD/MM/YYYY [as] HH:mm:ss');
    };
    DateUtilsService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], DateUtilsService);
    return DateUtilsService;
}());
export { DateUtilsService };
//# sourceMappingURL=dateutils.service.js.map