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
exports.OnlineOrder = exports.DeliveryStatus = void 0;
var OrderItemStatus_1 = require("./OrderItemStatus");
var OrderType_1 = require("./OrderType");
var Order_1 = require("./Order");
var DeliveryStatus;
(function (DeliveryStatus) {
    DeliveryStatus["PADDING"] = "PADDING";
    DeliveryStatus["ONTHEWAY"] = "ON THE WAY";
    DeliveryStatus["DELIVERED"] = "DELIVERED";
})(DeliveryStatus = exports.DeliveryStatus || (exports.DeliveryStatus = {}));
var OnlineOrder = /** @class */ (function (_super) {
    __extends(OnlineOrder, _super);
    function OnlineOrder(id, customer, location) {
        var _this = _super.call(this, OrderType_1.OrderType.ONLINE, id, OrderItemStatus_1.OrderItemStatus.LISTED) || this;
        _this.customer = customer;
        _this.location = location;
        _this.deliverStatus = DeliveryStatus.PADDING;
        return _this;
    }
    OnlineOrder.prototype.setDeliveryStatus = function (status) {
        this.deliverStatus = status;
    };
    OnlineOrder.prototype.setDelivery = function (delivery) {
        this.deliver = delivery;
    };
    OnlineOrder.prototype.updateLocation = function (location) {
        this.location = location;
    };
    OnlineOrder.prototype.getCustomer = function () {
        return this.customer;
    };
    return OnlineOrder;
}(Order_1.Order));
exports.OnlineOrder = OnlineOrder;
