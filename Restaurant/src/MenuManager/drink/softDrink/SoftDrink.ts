import { Drink } from "../Drink";
import { Category } from "../../menu/Category";

export class SoftDrink extends Drink {
    constructor(name: string, description: string, volume: number, price: number){
        super(Category.SOFTDRINK, name, description, price, volume);
    }
}

