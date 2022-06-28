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
exports.GeneralDish = void 0;
var MenuItem_1 = require("../../menu/MenuItem");
var Meal_1 = require("../Meal");
var GeneralDish = /** @class */ (function (_super) {
    __extends(GeneralDish, _super);
    function GeneralDish(name, description, price, dishSize) {
        return _super.call(this, dishSize, MenuItem_1.Category.DISH, name, description, price) || this;
    }
    return GeneralDish;
}(Meal_1.Meal));
exports.GeneralDish = GeneralDish;
