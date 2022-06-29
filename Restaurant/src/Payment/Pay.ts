import { Order } from "../OrderManager/order/Order";

export abstract class Pay{
    
    constructor(protected id: number, protected order:Order,protected moneyToPay :number){}
    getOrders():Order{
        return this.order;
    }
    recieveMoney(){
        return this.moneyToPay;
    };

}