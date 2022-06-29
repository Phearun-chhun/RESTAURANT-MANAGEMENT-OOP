import { Customer } from "../HumanManager/customer/Customer";
// import { Order } from "./order/Order";
import { OfflineOrder } from "./order/OfflineOrder";
import { OnlineOrder } from "./order/OnlineOrder";

export class OrderManager {
    private offlineOrder: OfflineOrder[] = [];
    private onlineOrder: OnlineOrder[] = [];

    addOnlineOrder(onlineOrder: OnlineOrder) {
        this.onlineOrder.push(onlineOrder);
    }
    getOnlineOrder() {
        return this.onlineOrder;
    }
    addOfflineOrder(offlineOrder: OfflineOrder) {
        this.offlineOrder.push(offlineOrder);
    }
    getOfflineOrder() {
        return this.offlineOrder;
    }
    
}
