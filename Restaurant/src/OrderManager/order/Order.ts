import { Table } from "../table/Table";

export class Order {
    protected price: number = 0;
    protected orderItem: OrderItemp[] = [];
    constructor(private number: number, private table: Table, private servingWaiter: Waiter) {}

    setPay(price: number) {
        this.price = price;
    } 
}