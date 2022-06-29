import { Order } from "../OrderManager/order/Order";
import { Pay } from "./pay";
import { Receipt } from "./Reciept";

export class PaymentManager {

    private pays:Pay[]=[];
    private receipts:Receipt[]=[] ;
    addPay(...pay:Pay[]){
        this.pays= this.pays.concat(pay);
    }
    getPay():Pay[]{
        return this.pays;
    }
    // isOrderPaid(order:Order):boolean{
    //     let isPaid  = false;
    //     let pays = this.pays; 
    //     for(let k=0; k<pays.length; k++){
    //         if(pays[k].getOrders().isOrderEqual(order)){
    //             isPaid = true;
    //         }
    //     }
    //     return isPaid;
    // }
    addReceipt(receipt: Receipt) {
        // this.receipts = this.receipts.concat(receipt);
        this.receipts.push(receipt);
    }
    getReceipt(){
        return this.receipts;
    }
}