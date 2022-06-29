"use strict";
exports.__esModule = true;
exports.HumanManager = void 0;
var HumanManager = /** @class */ (function () {
    function HumanManager() {
        this.staffs = [];
        this.customers = [];
        this.staffSalaray = 0;
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
        this.staffs.push(staff);
    };
    HumanManager.prototype.getStaff = function () {
        return this.staffs;
    };
    HumanManager.prototype.getTotalSalaryOfStaff = function () {
        var salary = 0;
        for (var _i = 0, _a = this.staffs; _i < _a.length; _i++) {
            var staff = _a[_i];
            salary += staff.getSalary();
        }
        return this.staffSalaray = salary;
    };
    return HumanManager;
}());
exports.HumanManager = HumanManager;
