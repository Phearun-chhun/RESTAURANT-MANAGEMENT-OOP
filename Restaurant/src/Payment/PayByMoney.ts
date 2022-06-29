import { Order } from "../OrderManager/order/Order";
import { Pay } from "./pay";

export class PayByMoney extends Pay{
    // protected pays :Pay[]=[];
    constructor( id:number, orders :Order){
        super(id,orders)
    }
}