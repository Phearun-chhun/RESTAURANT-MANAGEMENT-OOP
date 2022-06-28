"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(id, customer, servingWaiter, status) {
        this.id = id;
        this.customer = customer;
        this.servingWaiter = servingWaiter;
        this.status = status;
        this.totalPrice = 0;
        this.foods = [];
    }
    Order.prototype.addTable = function (table) {
        if (table.isTableFree) {
            this.tables = table;
            table.isTableFree = false;
        }
    };
    Order.prototype.getTotalPrice = function () {
        var price = 0;
        for (var _i = 0, _a = this.foods; _i < _a.length; _i++) {
            var food = _a[_i];
            price += food.getPrice();
        }
        this.totalPrice = price;
    };
    Order.prototype.addFood = function (meal) {
        this.foods.push(meal);
    };
    Order.prototype.addDrink = function (drink) {
        this.foods.push(drink);
    };
    Order.prototype.getCustomer = function () {
        return this.customer;
    };
    return Order;
}());
exports.Order = Order;
