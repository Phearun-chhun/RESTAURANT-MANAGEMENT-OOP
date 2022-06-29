"use strict";
exports.__esModule = true;
exports.Chair = void 0;
var ChairStatus_1 = require("./ChairStatus");
var Chair = /** @class */ (function () {
    function Chair(id) {
        this.id = id;
        this.status = ChairStatus_1.ChairStatus.GOOD;
        this.customers = undefined;
    }
    return Chair;
}());
exports.Chair = Chair;
