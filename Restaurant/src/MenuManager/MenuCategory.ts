import { Acohol } from "./drink/acohol/Acohol";
import { Drink } from "./drink/Drink";
import { SoftDrink } from "./drink/softDrink/SoftDrink";
import { Dessert } from "./meal/desert/Desert";
import { GeneralDish } from "./meal/generalDish/GeneralDish";
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

    getDish(): GeneralDish[]{
        let dishes: GeneralDish[] = [];
        this.foods.forEach(food => {
            if(food.getCategory()==Category.DISH){
                dishes.push(food);
            }
        });
        return dishes;
    }

    getAcohol(): Acohol[]{
        let acohols: Acohol[] = [];
        this.drinks.forEach(drink => {
            if(drink.getCategory()==Category.ACOHOLDRINK){
                acohols.push(drink);
            }
        });
        return acohols;
    }

    getSoftDrink(): SoftDrink[]{
        let softDrinks: SoftDrink[] = [];
        this.drinks.forEach(drink => {
            if(drink.getCategory()==Category.SOFTDRINK){
                softDrinks.push(drink);
            }
        });
        return softDrinks;
    }
}
