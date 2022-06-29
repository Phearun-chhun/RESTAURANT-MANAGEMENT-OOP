import { Order } from "../OrderManager/order/Order";
import { Pay } from "./pay";

export class PayByMoney extends Pay{
    constructor( id:number, orders :Order, moneyToPay:number){
        super(id,orders,moneyToPay);
    }
}