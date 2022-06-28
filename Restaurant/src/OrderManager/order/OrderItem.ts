import { Chief } from "../../HumanManager/staff/Chief";
import { OrderItemStatus } from "./OrderItemStatus";
import { MenuItem } from "./../../MenuManager/menu/MenuItem";

export class OrderItem {
    constructor(private item: MenuItem, 
        private quantity: number,
        private status: OrderItemStatus,
        private cook: Chief){}
}