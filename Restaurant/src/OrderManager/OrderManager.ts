import { Customer } from "../HumanManager/customer/Customer";
import { Order } from "./order/Order";
import { Table } from "./table/Table";

export class OrderManager {
    private orders: Order[] = [];
    addOrder(order: Order) {
        this.orders.push(order)   
    }
    getOrders() {
        return this.orders;
    }
    
}
