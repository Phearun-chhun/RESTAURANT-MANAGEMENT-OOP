"use strict";
exports.__esModule = true;
exports.HumanManager = void 0;
var Staff_1 = require("./staff/Staff");
var HumanManager = /** @class */ (function () {
    function HumanManager() {
        this.staffs = [];
        this.customers = [];
    }
    HumanManager.prototype.addCustomer = function () {
        var newCustomer = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newCustomer[_i] = arguments[_i];
        }
        this.customers = this.customers.concat(newCustomer);
    };
    HumanManager.prototype.getCustomer = function () {
        return this.customers;
    };
    HumanManager.prototype.addStaff = function (staff) {
        if (staff.getCategory() !== Staff_1.StaffCategory.MANAGER) {
            this.staffs.push(staff);
        }
    };
    HumanManager.prototype.addManager = function (manager) {
        if (manager.getCategory() == Staff_1.StaffCategory.MANAGER) {
            this.manager = manager;
        }
    };
    HumanManager.prototype.getStaff = function () {
        return this.staffs;
    };
    return HumanManager;
}());
exports.HumanManager = HumanManager;
