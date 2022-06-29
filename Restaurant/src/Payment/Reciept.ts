import { Order } from "../OrderManager/order/Order";
import { Pay } from "./pay";
import { PayByMoney } from "./PayByMoney";

export class Receipt extends Pay{
    private pays :Pay;
    private payDate: string;
    constructor(id:number,  orders :Order,moneyToPay:number){
        super(id,orders,moneyToPay);
    }
    getTotalOfOrder(){
        return this.order.getTotalPrice();
    }
    toPay(pays:Pay){
       if(this.order.getTotalPrice() == pays.recieveMoney()){
            this.payDate = new Date().toString()
            return "You have paid successfully!";
       }
       else if(this.order.getTotalPrice() < pays.recieveMoney()){
            let changedPayment =  pays.recieveMoney()-this.order.getTotalPrice() ;
            this.payDate = new Date().toString()
            return ("Change money: "+changedPayment);
        }
        else{
            return 'You have no enough money to pay this amount' ;
       }
    }
}