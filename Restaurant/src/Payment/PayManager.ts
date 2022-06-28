import { Receipt } from "./Reciept";

export class paymentManager {
    protected receipt:Receipt[]=[];
    getReceipts(){
        return this.receipt;
    }
    addReceipt(receipt:Receipt){
        this.receipt.push(receipt);
    }
}