import { createBuilderStatusReporter } from "typescript";
import { Customer } from "../../HumanManager/customer/Customer";

export class Table {
    public isTableFree: boolean = true;
    private customers: Customer; 
    constructor(private id: number, private chairNumber: number){}


   getTableId(): number{
    return this.id;
    }

    addCustomer(customer: Customer) {
        console.log("customer:  "+this.customers)
        console.log("get member of customers: " +customer.getMember())
        console.log("get number of chairs: "+this.chairNumber)
            if (customer.getMember() <= this.chairNumber) {
                if (this.customers === undefined) {
                    this.customers=customer;
                }
            }
            
    }
    getCustomer() {
        return this.customers;
    }

}