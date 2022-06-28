import { Customer } from "./customer/Customer";
import {Staff, StaffCategory} from "./staff/Staff";
export class HumanManager {
    private manager: Staff;
    private staffs:Staff[] = [];
    private customers:Customer[] = [];
    addCustomer(...newCustomer: Customer[]){
        this.customers = this.customers.concat(newCustomer);
    }

    getCustomer():Customer[]{
        return this.customers;
    }

    addStaff(staff:Staff){
        if(staff.getCategory()!==StaffCategory.MANAGER){
            this.staffs.push(staff);
        }
    }

    addManager(manager:Staff){
        if(manager.getCategory()==StaffCategory.MANAGER){
            this.manager = manager;
        }
    }
    getStaff(){
        return this.staffs;
    }
}