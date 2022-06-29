"use strict";
exports.__esModule = true;
exports.MenuItem = exports.Category = void 0;
var Category;
(function (Category) {
    Category["SOFTDRINK"] = "SOFTDRINK";
    Category["ACOHOLDRINK"] = "ALCOHOLDRINK";
    Category["DESSERT"] = "DESSERT";
    Category["DISH"] = "DISH";
})(Category = exports.Category || (exports.Category = {}));
var MenuItem = /** @class */ (function () {
    function MenuItem(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
    MenuItem.prototype.getPrice = function () {
        return this.price;
    };
    return MenuItem;
}());
exports.MenuItem = MenuItem;
