"use strict";
exports.__esModule = true;
exports.Order = void 0;
var OrderItemStatus_1 = require("./OrderItemStatus");
var Order = /** @class */ (function () {
    function Order(orderType, id, status) {
        this.orderType = orderType;
        this.id = id;
        this.status = status;
        this.dateOrder = new Date().toString();
        this.totalPrice = 0;
        this.foods = [];
    }
    Order.prototype.getTotalPrice = function () {
        var price = 0;
        for (var _i = 0, _a = this.foods; _i < _a.length; _i++) {
            var food = _a[_i];
            price += food.getPrice();
        }
        return this.totalPrice = price;
    };
    Order.prototype.addFood = function (meal) {
        this.foods.push(meal);
    };
    Order.prototype.addDrink = function (drink) {
        this.foods.push(drink);
    };
    Order.prototype.setCook = function (chief) {
        this.cook = chief;
        this.status = OrderItemStatus_1.OrderItemStatus.COOK;
    };
    Order.prototype.setStatus = function (status) {
        this.status = status;
    };
    Order.prototype.isOrderEqual = function (other) {
        return this.id === other.id &&
            this.totalPrice === other.totalPrice;
    };
    return Order;
}());
exports.Order = Order;
