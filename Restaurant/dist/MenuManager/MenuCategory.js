"use strict";
exports.__esModule = true;
exports.MenuCategory = exports.MenuType = void 0;
var MenuType;
(function (MenuType) {
    MenuType["VIP"] = "VIP";
    MenuType["NORMAL"] = "NORMAL";
})(MenuType = exports.MenuType || (exports.MenuType = {}));
var MenuCategory = /** @class */ (function () {
    function MenuCategory(MenuType, description) {
        this.MenuType = MenuType;
        this.description = description;
        this.drinks = [];
        this.foods = [];
    }
    MenuCategory.prototype.addDrink = function () {
        var drink = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            drink[_i] = arguments[_i];
        }
        this.drinks = this.drinks.concat(drink);
    };
    MenuCategory.prototype.addFood = function () {
        var meal = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            meal[_i] = arguments[_i];
        }
        this.foods = this.foods.concat(meal);
    };
    return MenuCategory;
}());
exports.MenuCategory = MenuCategory;
