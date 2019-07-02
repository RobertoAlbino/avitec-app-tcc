import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var SortService = /** @class */ (function () {
    function SortService() {
    }
    SortService.prototype.sortBy = function (lista, prop) {
        lista.sort(function (a, b) {
            if (a[prop] > b[prop])
                return 1;
            if (a[prop] < b[prop])
                return -1;
            return 0;
        });
    };
    SortService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], SortService);
    return SortService;
}());
export { SortService };
//# sourceMappingURL=sort.service.js.map