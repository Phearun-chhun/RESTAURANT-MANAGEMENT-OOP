import { Customer } from "./customer/Customer";
import {Staff, StaffCategory} from "./staff/Staff";
export class HumanManager {
    private manager: Staff;
    private staffs:Staff[] = [];
    private customers: Customer[] = [];
    private staffSalaray:number = 0;
    addCustomer(...newCustomer: Customer[]){
        this.customers = this.customers.concat(newCustomer);
    }

    getCustomer():Customer[]{
        return this.customers;
    }

    addStaff(staff:Staff){
            this.staffs.push(staff);
    }

    getStaff(){
        return this.staffs;
    }
    getTotalSalaryOfStaff() { 
        let salary = 0; 
        for (let staff of this.staffs) {
            salary += staff.getSalary();
        }   
        return this.staffSalaray= salary;
    }
}