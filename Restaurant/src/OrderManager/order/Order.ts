import { Table } from "../table/Table";
import { Waiter } from "../../HumanManager/staff/Waiter";
import { MenuItem } from "../../MenuManager/menu/MenuItem";
import { OrderItemStatus } from "./OrderItemStatus";
import { Chief } from "../../HumanManager/staff/Chief";
import { Meal } from "../../MenuManager/meal/Meal";
import { Drink } from "../../MenuManager/drink/Drink";
import { Customer } from "../../HumanManager/customer/Customer";
import { PayByMoney } from "../../Payment/PayByMoney";
export class Order {
    private dateOrder = new Date().toString();
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

    setCook(chief: Chief){
        this.cook = chief;
        this.status = OrderItemStatus.COOK;
    }

    setStatus(status: OrderItemStatus){
        this.status = status;
    }
    isOrderEqual(other:Order){
        return this.id === other.id && 
               this.customer === other.customer &&
               this.totalPrice === other.totalPrice &&
               this.tables=== other.tables
    }
}
