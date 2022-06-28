import { Category } from "../../menu/Category";
import { DiskSide, Meal } from "../Meal";

export class GeneralDish extends Meal {
    constructor(name:string,
        description:string,
        price: number, 
        dishSide: DiskSide){
        super(dishSide, Category.DISH, name,description, price)
    }
}



