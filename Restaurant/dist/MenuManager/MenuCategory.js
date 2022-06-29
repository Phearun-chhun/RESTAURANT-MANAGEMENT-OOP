"use strict";
exports.__esModule = true;
exports.MenuCategory = exports.MenuType = void 0;
var MenuItem_1 = require("./menu/MenuItem");
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
    MenuCategory.prototype.getDessert = function () {
        var desserts = [];
        this.foods.forEach(function (food) {
            if (food.getCategory() == MenuItem_1.Category.DESSERT) {
                desserts.push(food);
            }
        });
        return desserts;
    };
    MenuCategory.prototype.getDish = function () {
        var dishes = [];
        this.foods.forEach(function (food) {
            if (food.getCategory() == MenuItem_1.Category.DISH) {
                dishes.push(food);
            }
        });
        return dishes;
    };
    MenuCategory.prototype.getAcohol = function () {
        var acohols = [];
        this.drinks.forEach(function (drink) {
            if (drink.getCategory() == MenuItem_1.Category.ACOHOLDRINK) {
                acohols.push(drink);
            }
        });
        return acohols;
    };
    MenuCategory.prototype.getSoftDrink = function () {
        var softDrinks = [];
        this.drinks.forEach(function (drink) {
            if (drink.getCategory() == MenuItem_1.Category.SOFTDRINK) {
                softDrinks.push(drink);
            }
        });
        return softDrinks;
    };
    return MenuCategory;
}());
exports.MenuCategory = MenuCategory;
