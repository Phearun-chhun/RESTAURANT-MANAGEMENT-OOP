import { Order } from "../OrderManager/order/Order";
import { Pay } from "./pay";

export class Receipt extends Pay{
    protected pays :Pay;
    protected payDate: string;
    constructor(id:number,  orders :Order){
        super(id,orders);
    }
    getTotalOfOrder(){
        return this.order.getTotalPrice();
    }
    toPay(pays:Pay){
       if(this.order.getTotalPrice === pays.recieveMoney){
        this.payDate = new Date().toString()
        return this.pays = pays;
       }
    //    else if(this.order.getTotalPrice() < pays.recieveMoney()){
    //         let newPayment = new Pay(this.order.getTotalPrice());
    //         let changedPayment =  pays.recieveMoney()-this.order.getTotalPrice() ;
    //         this.pays = newPayment;
    //         this.payDate = new Date().toString()
    //         return changedPayment;
    //     }
        else{
            return 'You have no enough money to pay this amount' ;
       }
    }
}