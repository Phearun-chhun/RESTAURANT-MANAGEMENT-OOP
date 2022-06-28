import { Drink } from "./drink/Drink";
import { Dessert } from "./meal/desert/Desert";
import { Meal } from "./meal/Meal"
import { Category } from "./menu/MenuItem";

export enum MenuType {
    VIP = 'VIP',
    NORMAL = 'NORMAL',
}

export class MenuCategory {
    private drinks: Drink[] = [];
    private foods: Meal[] = [];
    constructor( private MenuType: MenuType, private description: string){}

    addDrink(...drink: Drink[]){
        this.drinks = this.drinks.concat(drink);
    }

    addFood(...meal: Meal[]){
        this.foods = this.foods.concat(meal);
    }

    getDessert(): Dessert[]{
        let desserts: Dessert[] = [];
        this.foods.forEach(food => {
            if(food.getCategory()==Category.DESSERT){
                desserts.push(food);
            }
        });
        return desserts;
    }
}
