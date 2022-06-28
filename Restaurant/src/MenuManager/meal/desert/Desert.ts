import { Category } from "../../menu/Category";
import { DiskSide, Meal } from "../Meal";

export class Dessert extends Meal {
    constructor(name:string,
        description:string,
        price: number, 
        dishSide: DiskSide){
        super(dishSide,Category.DESSERT, name,description, price)
    }
}


