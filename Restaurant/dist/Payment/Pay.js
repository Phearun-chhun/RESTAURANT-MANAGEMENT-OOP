"use strict";
exports.__esModule = true;
exports.Pay = void 0;
var Pay = /** @class */ (function () {
    function Pay(id, order, moneyToPay) {
        this.id = id;
        this.order = order;
        this.moneyToPay = moneyToPay;
    }
    Pay.prototype.getOrders = function () {
        return this.order;
    };
    Pay.prototype.recieveMoney = function () {
        return this.moneyToPay;
    };
    ;
    return Pay;
}());
exports.Pay = Pay;
