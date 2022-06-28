"use strict";
exports.__esModule = true;
exports.Restuarant = void 0;
var HumanManager_1 = require("./HumanManager/HumanManager");
var MenuManager_1 = require("./MenuManager/MenuManager");
var OrderManager_1 = require("./OrderManager/OrderManager");
var Restuarant = /** @class */ (function () {
    function Restuarant(name, address) {
        this.hr = new HumanManager_1.HumanManager();
        this.order = new OrderManager_1.OrderManager();
        this.menu = new MenuManager_1.MenuManager();
        this.name = name;
        this.address = address;
    }
    return Restuarant;
}());
exports.Restuarant = Restuarant;
