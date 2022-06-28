import { Chief } from "../../HumanManager/staff/Chief";
import { MenuItem } from "../../MenuManager/menu/MenuItem";
import { OrderItemStatus } from "./OrderItemStatus";

export class OrderItem {
    constructor(
        private item: MenuItem, 
        private quantity: number,
        private status: OrderItemStatus,
        private cook: Chief){}

}