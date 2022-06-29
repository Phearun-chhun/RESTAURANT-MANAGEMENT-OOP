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
exports.Chief = void 0;
var Staff_1 = require("./Staff");
var Chief = /** @class */ (function (_super) {
    __extends(Chief, _super);
    function Chief(id, name, age, gender) {
        return _super.call(this, Staff_1.StaffCategory.CHIEF, id, name, age, gender) || this;
    }
    Chief.prototype.isEqual = function (other) {
        return (this.name == other.name &&
            this.age == other.age &&
            this.gender == other.gender &&
            this.category == other.category);
    };
    return Chief;
}(Staff_1.Staff));
exports.Chief = Chief;
