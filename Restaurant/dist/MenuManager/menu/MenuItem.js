"use strict";
exports.__esModule = true;
exports.MenuItem = void 0;
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
