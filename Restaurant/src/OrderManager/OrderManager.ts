import { Customer } from "../HumanManager/customer/Customer";
import { Order } from "./order/Order";
import { Table } from "./table/Table";

export class OrderManager {
    private orders: Order[] = [];

    customerOrder(customer:Customer){
        let isHave = false;
        for(let order of this.orders){
            console.log(order.getCustomer());
            if(order.getCustomer().isEqual(customer)){
                isHave = true;
            }
        }
        return isHave;
    }
    addOrder(order: Order) {
        if(!(this.customerOrder(order.getCustomer()))){
            this.orders.push(order)   
        }
    }
    getOrders() {
        return this.orders;
    }
}
