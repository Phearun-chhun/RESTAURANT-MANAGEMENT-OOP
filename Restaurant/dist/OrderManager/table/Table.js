"use strict";
exports.__esModule = true;
exports.Table = void 0;
var Table = /** @class */ (function () {
    function Table(id, chairNumber) {
        this.id = id;
        this.chairNumber = chairNumber;
        this.chairs = [];
        this.isTableFree = true;
    }
    Table.prototype.getNumberOfChairs = function () {
        return this.chairs.length;
    };
    Table.prototype.getChair = function () {
        return this.chairs;
    };
    Table.prototype.addChair = function (chair) {
        return this.chairs.push(chair);
    };
    Table.prototype.getTableId = function () {
        return this.id;
    };
    return Table;
}());
exports.Table = Table;
