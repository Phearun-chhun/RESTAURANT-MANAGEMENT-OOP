import { Customer } from "../../HumanManager/customer/Customer";
import { ChairStatus } from "./ChairStatus";

export class Chair {
    private status = ChairStatus.GOOD;
    private customers ?: Customer = undefined;
    constructor(private id: number){}
    setCustomer(customer: Customer){
        this.customers = customer;
    }
    hasCustomer(){
        return this.customers !== undefined;
    }
    getCustomer(){
        return this.customers;
    }
    getStatus(){
        return this.status;
    }
    setStatus(newStatus: ChairStatus){
        this.status = newStatus;
    }
    removeCustomer(){
        return this.customers =     undefined; //
    }
}