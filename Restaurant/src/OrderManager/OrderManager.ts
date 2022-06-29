import { Customer } from "../HumanManager/customer/Customer";
// import { Order } from "./order/Order";
import { OfflineOrder } from "./order/OfflineOrder";
import { OnlineOrder } from "./order/OnlineOrder";
import { Table } from "./table/Table";

export class OrderManager {
    private offlineOrder: OfflineOrder[] = [];
    private onlineOrder: OnlineOrder[] = [];

    // customerOrder(customer:Customer){
    //     let isHave = false;
    //     for(let order of this.orders){
    //         if(order.getCustomer().isEqual(customer)){
    //             isHave = true;
    //         }
    //     }
    //     return isHave;
    // }
    // addOrder(order: Order) {
    //     if(!(this.customerOrder(order.getCustomer()))){
    //         this.orders.push(order)   
    //     }
    // }
    getOnlineOrder() {
        return this.onlineOrder;
    }

    getOfflineOrder() {
        return this.offlineOrder;
    }
    
}
