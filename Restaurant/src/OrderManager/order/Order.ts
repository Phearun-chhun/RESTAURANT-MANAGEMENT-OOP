import { Table } from "../table/Table";
import { Waiter } from "../../HumanManager/staff/Waiter";
import { MenuItem } from "../../MenuManager/menu/MenuItem";
import { OrderItemStatus } from "./OrderItemStatus";
import { Chief } from "../../HumanManager/staff/Chief";
import { Meal } from "../../MenuManager/meal/Meal";
import { Drink } from "../../MenuManager/drink/Drink";
import { Customer } from "../../HumanManager/customer/Customer";
import { Receipt } from "../../Payment/Reciept";
export class Order {
    private tables : Table;
    private cook: Chief;
    protected totalPrice: number = 0;
    protected foods: MenuItem[]=[];
    constructor(
        protected id: number, 
        private customer: Customer,
        private servingWaiter: Waiter,  
        private status: OrderItemStatus,
        ) {}
    addTable(table: Table){
        if(table.isTableFree ){
            this.tables=table;
            table.isTableFree = false;
        }
    }

    getTotalPrice(){
        let price = 0
        for(let food of this.foods){
          price += food.getPrice();
        }
        return  this.totalPrice = price;
    }

    addFood(meal:Meal){
        this.foods.push(meal)
    }
    addDrink(drink:Drink){
        this.foods.push(drink)
    }
    getCustomer(){
        return this.customer;
    }
}
