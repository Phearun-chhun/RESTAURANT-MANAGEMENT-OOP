import { Table } from "../table/Table";
import { OrderItem } from "./OrderItem";
import { Waiter } from "../../HumanManager/staff/Waiter";
export class Order {
    protected price: number = 0;
    protected orderItem: OrderItem[] = [];
    constructor(private number: number, private table: Table, private servingWaiter: Waiter) {}

    setPay(price: number) {
        this.price = price;
    } 
}