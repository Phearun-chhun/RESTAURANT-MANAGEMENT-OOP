import { Order } from "../OrderManager/order/Order";
import { OrderItemStatus } from "../OrderManager/order/OrderItemStatus";
import { Pay } from "./pay";

export class Receipt extends Pay{
    private pays :Pay;
    private payDate: string;
    constructor(id:number,  order :Order, moneyToPay:number){
        super(id,order,moneyToPay);
    }
    getTotalOfOrder(){
        return this.order.getTotalPrice();
    }
    toPay(pays:Pay){
       if(this.order.getTotalPrice() == pays.recieveMoney()){
            this.payDate = new Date().toString()
            this.order.setStatus(OrderItemStatus.PAID);
            return "You have paid successfully!";
       }
       else if(this.order.getTotalPrice() < pays.recieveMoney()){
            let changedPayment =  pays.recieveMoney()-this.order.getTotalPrice() ;
            this.payDate = new Date().toString()
            this.order.setStatus(OrderItemStatus.PAID);
            return ("Change money: "+changedPayment);
        }
        else{
            return 'You have no enough money to pay this amount' ;
       }
    }
}