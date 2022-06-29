import { Order } from "../OrderManager/order/Order";
import { Pay } from "./pay";
import { PayByMoney } from "./PayByMoney";
import { Receipt } from "./Reciept";

export class PaymentManager {
    private listTopay:PayByMoney[]=[];
    private receipts:Receipt[]=[];
    addPay(...pay:Pay[]){
        this.listTopay= this.listTopay.concat(pay);
    }
    getPay():Pay[]{
        return this.listTopay;
    }
    isOrderPaid(order:Order):boolean{
        let isPaid  = false;
        let listTopay = this.listTopay; 
        for(let k=0; k<listTopay.length; k++){
            if(listTopay[k].getOrders().isOrderEqual(order)){
                isPaid = true;
            }
        }
        return isPaid;
    }
    addReceipt(receipt: Receipt) {
        this.receipts.push(receipt);
    }
    getReceipt(){
        return this.receipts;
    }
}