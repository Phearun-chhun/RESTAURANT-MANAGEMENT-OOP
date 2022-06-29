"use strict";
exports.__esModule = true;
exports.MenuManager = void 0;
var MenuCategory_1 = require("./MenuCategory");
var MenuManager = /** @class */ (function () {
    function MenuManager() {
        this.vip = new MenuCategory_1.MenuCategory(MenuCategory_1.MenuType.VIP, 'The best foods & drinks with costly');
        this.normal = new MenuCategory_1.MenuCategory(MenuCategory_1.MenuType.NORMAL, 'The good foods & drinks with inexpensive');
    }
    return MenuManager;
}());
exports.MenuManager = MenuManager;
