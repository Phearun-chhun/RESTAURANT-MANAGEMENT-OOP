"use strict";
exports.__esModule = true;
exports.Chair = void 0;
var ChairStatus_1 = require("./ChairStatus");
var Chair = /** @class */ (function () {
    function Chair(id) {
        this.id = id;
        this.status = ChairStatus_1.ChairStatus.GOOD;
        this.customers = undefined;
    }
    Chair.prototype.setCustomer = function (customer) {
        this.customers = customer;
    };
    Chair.prototype.hasCustomer = function () {
        return this.customers !== undefined;
    };
    Chair.prototype.getCustomer = function () {
        return this.customers;
    };
    Chair.prototype.getStatus = function () {
        return this.status;
    };
    Chair.prototype.setStatus = function (newStatus) {
        this.status = newStatus;
    };
    Chair.prototype.removeCustomer = function () {
        return this.customers = undefined; //
    };
    return Chair;
}());
exports.Chair = Chair;
