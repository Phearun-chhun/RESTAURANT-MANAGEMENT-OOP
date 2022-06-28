import { Waiter } from "../../HumanManager/staff/Waiter";
import { Table } from "../table/Table";
import { OrderItem } from "./OrderItem";

export class Order {
    private tables : Table[]=[];
    protected price: number = 0;
    protected orderItem: OrderItem[] = [];
    constructor(private number: number, private table: Table, private servingWaiter: Waiter) {}
    addTable(table: Table){
        this.tables.push(table);
    }
    getNumberOfTables(){
        return this.tables.length;
    }
    findFreeTable():Table | undefined{
        let tables = this.tables;
        for (let table of tables){
            if(table.getFreeChair() !== undefined){
                return table;
            }
        }
        return undefined;
    }
    
}