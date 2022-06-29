"use strict";
exports.__esModule = true;
exports.PaymentManager = void 0;
var PaymentManager = /** @class */ (function () {
    function PaymentManager() {
        this.listTopay = [];
        this.receipts = [];
    }
    PaymentManager.prototype.addPay = function () {
        var pay = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pay[_i] = arguments[_i];
        }
        this.listTopay = this.listTopay.concat(pay);
    };
    PaymentManager.prototype.getPay = function () {
        return this.listTopay;
    };
    PaymentManager.prototype.isOrderPaid = function (order) {
        var isPaid = false;
        var listTopay = this.listTopay;
        for (var k = 0; k < listTopay.length; k++) {
            if (listTopay[k].getOrders().isOrderEqual(order)) {
                isPaid = true;
            }
        }
        return isPaid;
    };
    PaymentManager.prototype.addReceipt = function (receipt) {
        this.receipts.push(receipt);
    };
    PaymentManager.prototype.getReceipt = function () {
        return this.receipts;
    };
    return PaymentManager;
}());
exports.PaymentManager = PaymentManager;
