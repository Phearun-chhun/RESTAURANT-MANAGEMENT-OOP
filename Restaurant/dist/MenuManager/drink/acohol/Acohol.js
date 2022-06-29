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
exports.Acohol = void 0;
var MenuItem_1 = require("../../menu/MenuItem");
var Drink_1 = require("../Drink");
var Acohol = /** @class */ (function (_super) {
    __extends(Acohol, _super);
    function Acohol(name, description, volume, price) {
        return _super.call(this, MenuItem_1.Category.ACOHOLDRINK, name, description, volume, price) || this;
    }
    return Acohol;
}(Drink_1.Drink));
exports.Acohol = Acohol;
