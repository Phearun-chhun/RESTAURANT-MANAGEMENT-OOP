import { Table } from "../table/Table";
import { Waiter } from "../../HumanManager/staff/Waiter";
import { OrderItemStatus } from "./OrderItemStatus";
import { OrderType } from "./OrderType";
import { Order } from "./Order";
export class OfflineOrder extends Order {
    private tables : Table;
    constructor(
        id: number, 
        private servingWaiter: Waiter,  
    ) {
        super(OrderType.OFFLINE, id, OrderItemStatus.LISTED)
    }
    addTable(table: Table){
        if(table.isTableFree ){
            this.tables=table;
            table.isTableFree = false;
        }
    }
    getTable() {
        return this.tables;
    }
    setStatus(status: OrderItemStatus){
        this.status = status;
    }
}
