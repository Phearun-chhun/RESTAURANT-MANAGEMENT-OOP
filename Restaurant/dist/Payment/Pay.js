"use strict";
exports.__esModule = true;
exports.Pay = void 0;
var Pay = /** @class */ (function () {
    function Pay(id, order) {
        this.id = id;
        this.order = order;
    }
    Pay.prototype.getOrders = function () {
        return this.order;
    };
    return Pay;
}());
exports.Pay = Pay;
