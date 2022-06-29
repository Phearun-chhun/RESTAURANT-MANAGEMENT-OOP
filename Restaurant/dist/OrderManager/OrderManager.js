"use strict";
exports.__esModule = true;
exports.OrderManager = void 0;
var OrderManager = /** @class */ (function () {
    function OrderManager() {
        this.orders = [];
    }
    OrderManager.prototype.customerOrder = function (customer) {
        var isHave = false;
        for (var _i = 0, _a = this.orders; _i < _a.length; _i++) {
            var order = _a[_i];
            console.log(order.getCustomer());
            if (order.getCustomer().isEqual(customer)) {
                isHave = true;
            }
        }
        return isHave;
    };
    OrderManager.prototype.addOrder = function (order) {
        if (!(this.customerOrder(order.getCustomer()))) {
            this.orders.push(order);
        }
    };
    OrderManager.prototype.getOrders = function () {
        return this.orders;
    };
    return OrderManager;
}());
exports.OrderManager = OrderManager;
