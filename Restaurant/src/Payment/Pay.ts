import { Order } from "../OrderManager/order/Order";

export abstract class Pay{
    recieveMoney: () => number;
    constructor(protected id: number, protected order:Order){}
    getOrders():Order{
        return this.order;
    }
    

}