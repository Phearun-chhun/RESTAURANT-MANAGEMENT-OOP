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
exports.OfflineOrder = void 0;
var OrderItemStatus_1 = require("./OrderItemStatus");
var OrderType_1 = require("./OrderType");
var Order_1 = require("./Order");
var OfflineOrder = /** @class */ (function (_super) {
    __extends(OfflineOrder, _super);
    function OfflineOrder(id, servingWaiter) {
        var _this = _super.call(this, OrderType_1.OrderType.OFFLINE, id, OrderItemStatus_1.OrderItemStatus.LISTED) || this;
        _this.servingWaiter = servingWaiter;
        return _this;
    }
    OfflineOrder.prototype.addTable = function (table) {
        if (table.isTableFree) {
            this.tables = table;
            table.isTableFree = false;
        }
    };
    OfflineOrder.prototype.getTable = function () {
        return this.tables;
    };
    OfflineOrder.prototype.setStatus = function (status) {
        this.status = status;
    };
    return OfflineOrder;
}(Order_1.Order));
exports.OfflineOrder = OfflineOrder;
