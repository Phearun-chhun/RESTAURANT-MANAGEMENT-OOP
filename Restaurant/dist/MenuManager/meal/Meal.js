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
exports.Meal = exports.DiskSide = void 0;
var MenuItem_1 = require("../menu/MenuItem");
var DiskSide;
(function (DiskSide) {
    DiskSide["BIG"] = "BIG";
    DiskSide["MEDIUM"] = "MEDIUM";
    DiskSide["SMALL"] = "SMALL";
})(DiskSide = exports.DiskSide || (exports.DiskSide = {}));
var Meal = /** @class */ (function (_super) {
    __extends(Meal, _super);
    function Meal(dishSide, category, name, description, price) {
        var _this = _super.call(this, name, description, price) || this;
        _this.dishSide = dishSide;
        _this.category = category;
        return _this;
    }
    return Meal;
}(MenuItem_1.MenuItem));
exports.Meal = Meal;
