"use strict";
exports.__esModule = true;
exports.OrderManager = void 0;
var OrderManager = /** @class */ (function () {
    function OrderManager() {
        this.offlineOrder = [];
        this.onlineOrder = [];
    }
    OrderManager.prototype.addOnlineOrder = function (onlineOrder) {
        this.onlineOrder.push(onlineOrder);
    };
    OrderManager.prototype.getOnlineOrder = function () {
        return this.onlineOrder;
    };
    OrderManager.prototype.addOfflineOrder = function (offlineOrder) {
        this.offlineOrder.push(offlineOrder);
    };
    OrderManager.prototype.getOfflineOrder = function () {
        return this.offlineOrder;
    };
    return OrderManager;
}());
exports.OrderManager = OrderManager;
