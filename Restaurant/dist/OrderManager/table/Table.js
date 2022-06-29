"use strict";
exports.__esModule = true;
exports.Table = void 0;
var Table = /** @class */ (function () {
    function Table(id, chairNumber) {
        this.id = id;
        this.chairNumber = chairNumber;
        this.isTableFree = true;
    }
    Table.prototype.getTableId = function () {
        return this.id;
    };
    return Table;
}());
exports.Table = Table;
