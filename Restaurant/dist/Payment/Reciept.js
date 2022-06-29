"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Receipt = void 0;
var OrderItemStatus_1 = require("../OrderManager/order/OrderItemStatus");
var pay_1 = require("./pay");
var Receipt = /** @class */ (function (_super) {
    __extends(Receipt, _super);
    function Receipt(id, order, moneyToPay) {
        return _super.call(this, id, order, moneyToPay) || this;
    }
    Receipt.prototype.getTotalOfOrder = function () {
        return this.order.getTotalPrice();
    };
    Receipt.prototype.toPay = function (pays) {
        if (this.order.getTotalPrice() == pays.recieveMoney()) {
            this.payDate = new Date().toString();
            this.order.setStatus(OrderItemStatus_1.OrderItemStatus.PAID);
            return "You have paid successfully!";
        }
        else if (this.order.getTotalPrice() < pays.recieveMoney()) {
            var changedPayment = pays.recieveMoney() - this.order.getTotalPrice();
            this.payDate = new Date().toString();
            this.order.setStatus(OrderItemStatus_1.OrderItemStatus.PAID);
            return ("Change money: " + changedPayment);
        }
        else {
            return 'You have no enough money to pay this amount';
        }
    };
    return Receipt;
}(pay_1.Pay));
exports.Receipt = Receipt;
