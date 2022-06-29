"use strict";
exports.__esModule = true;
exports.PaymentManager = void 0;
var PaymentManager = /** @class */ (function () {
    function PaymentManager() {
        this.pays = [];
    }
    PaymentManager.prototype.addPay = function (pay) {
        this.pays.push(pay);
    };
    PaymentManager.prototype.getPay = function () {
        return this.pays;
    };
    PaymentManager.prototype.isOrderPaid = function (order) {
        var isPaid = false;
        var pays = this.pays;
        for (var k = 0; k < pays.length; k++) {
            if (pays[k].getOrders().isOrderEqual(order)) {
                isPaid = true;
            }
        }
        return isPaid;
    };
    return PaymentManager;
}());
exports.PaymentManager = PaymentManager;
