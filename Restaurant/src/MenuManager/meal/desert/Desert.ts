import { Category } from "../../menu/MenuItem";
import { DiskSize, Meal } from "../Meal";

export class Dessert extends Meal {
    constructor(name:string,
        description:string,
        price: number, 
        dishSide: DiskSize){
        super(dishSide,Category.DESSERT, name,description, price)
    }
}



