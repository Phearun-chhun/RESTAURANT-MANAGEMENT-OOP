import { Drink } from "./drink/Drink";
import { Meal } from "./meal/Meal"
import { Category } from "./menu/Category";

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
}
