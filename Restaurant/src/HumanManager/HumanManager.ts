import { Customer } from "./customer/Customer";
import { Staff } from "./staff/Staff";

export class HumanManager {
    private staffs:Staff[] = [];
    private customers:Customer[] = [];
    addCustomer(customer:Customer){
        this.customers.push(customer);
    }
    getCustomer():Customer{
        return this.customers;
    }
    addStaff(staff:Staff){
        this.staffs.push(staff);
    }
    getStaff(){
        return this.staffs;
    }
}