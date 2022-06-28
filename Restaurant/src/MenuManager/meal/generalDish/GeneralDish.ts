import { Category } from "../../menu/MenuItem";
import { DiskSize, Meal } from "../Meal";

export class GeneralDish extends Meal {
    constructor(name:string,
        description:string,
        price: number, 
        dishSize: DiskSize){
        super(dishSize, Category.DISH, name,description, price)
    }
}



