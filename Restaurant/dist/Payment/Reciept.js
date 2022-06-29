"use strict";
exports.__esModule = true;
exports.Receipt = void 0;
var pay_1 = require("./pay");
var Receipt = /** @class */ (function () {
    function Receipt(orders) {
        this.orders = orders;
    }
    Receipt.prototype.getTotalOfOrder = function () {
        return this.orders.getTotalPrice;
    };
    Receipt.prototype.toPay = function (pays) {
        if (this.orders.getTotalPrice === pays.recieveMoney) {
            return this.pays = pays;
        }
        else {
            if (this.orders.getTotalPrice() < pays.recieveMoney()) {
                var newPayment = new pay_1.Pay(this.orders.getTotalPrice());
            }
        }
    };
    return Receipt;
}());
exports.Receipt = Receipt;
