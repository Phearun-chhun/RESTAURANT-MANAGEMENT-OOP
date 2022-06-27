import { OrderItemStatus } from "./OrderItemStatus";

export class OrderItem {
    constructor(private item: MenuItem, 
        private quantity: number,
        private status: OrderItemStatus,
        private cook: Chief){}
}