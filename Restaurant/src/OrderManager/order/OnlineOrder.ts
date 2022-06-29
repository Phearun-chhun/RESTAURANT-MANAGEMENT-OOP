import { OrderItemStatus } from "./OrderItemStatus";
import { OrderType } from "./OrderType";
import { Order } from "./Order";
import { Customer } from "../../HumanManager/customer/Customer";
import { Delivery } from "../../HumanManager/staff/Delivery";
import { Address } from "../../Address";

export enum DeliveryStatus {
    PADDING = 'PADDING',
    ONTHEWAY = 'ON THE WAY',
    DELIVERED = 'DELIVERED'
}
export class OnlineOrder extends Order {
    private deliver: Delivery;
    private deliverStatus: DeliveryStatus = DeliveryStatus.PADDING;
    constructor(
        id: number, 
        private customer : Customer,
        private location: Address,
    ) {
        super(OrderType.ONLINE, id, OrderItemStatus.LISTED)
    }

    setDeliveryStatus(status: DeliveryStatus){
        this.deliverStatus = status;
    }

    setDelivery(delivery: Delivery){
        this.deliver = delivery;
    }

    updateLocation(location: Address){
        this.location = location;
    }

    getCustomer(): Customer {
        return this.customer;
    }
}
