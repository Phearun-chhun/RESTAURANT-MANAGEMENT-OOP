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
exports.Drink = void 0;
var MenuItem_1 = require("../menu/MenuItem");
var Drink = /** @class */ (function (_super) {
    __extends(Drink, _super);
    /**
  * volume: number of mililiter(ml) per item
  * price: equal to number of dollars per item
  */
    function Drink(category, name, description, volume, price) {
        var _this = _super.call(this, name, description, price) || this;
        _this.category = category;
        _this.volume = volume;
        return _this;
    }
    Drink.prototype.getCategory = function () {
        return this.category;
    };
    return Drink;
}(MenuItem_1.MenuItem));
exports.Drink = Drink;
