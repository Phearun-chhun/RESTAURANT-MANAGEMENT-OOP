import { Order } from "../OrderManager/order/Order";
import { Pay } from "./pay";

export class Receipt{
    protected pays :Pay;
    constructor(protected orders :Order){}
    getTotalOfOrder(){
        return this.orders.getTotalPrice;
    }
    toPay(pays:Pay){
       if(this.orders.getTotalPrice === pays.recieveMoney){
        return this.pays = pays;
       }else if(this.orders.getTotalPrice() < pays.recieveMoney()){
            let newPayment = new Pay(this.orders.getTotalPrice());
            let changedPayment =  pays.recieveMoney()-this.orders.getTotalPrice() ;
            this.pays = newPayment;
            return changedPayment;
       }else{
            return 'You have no enough money to pay this amount' ;
       }
    }
}