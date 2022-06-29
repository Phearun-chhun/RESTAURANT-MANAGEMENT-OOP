import { MenuItem } from "../../MenuManager/menu/MenuItem";
import { OrderItemStatus } from "./OrderItemStatus";
import { Chief } from "../../HumanManager/staff/Chief";
import { Meal } from "../../MenuManager/meal/Meal";
import { Drink } from "../../MenuManager/drink/Drink";
import { OrderType } from "./OrderType";
export abstract class Order {
    protected cook: Chief;
    protected dateOrder = new Date().toString();
    protected totalPrice: number = 0;
    protected foods: MenuItem[]=[];
    
    constructor(
        protected orderType: OrderType,
        protected id: number,   
        protected status: OrderItemStatus,
        ) {}

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

    setCook(chief: Chief){
        this.cook = chief;
        this.status = OrderItemStatus.COOK;
    }

    setStatus(status: OrderItemStatus){
        this.status = status;
    }
    
    isOrderEqual(other:Order){
        return this.id === other.id &&
            this.totalPrice === other.totalPrice;
    }
}
