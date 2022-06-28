import { Category } from "../../menu/MenuItem";
import { Drink } from "../Drink";

export class SoftDrink extends Drink {
    constructor(name: string, description: string, volume: number, price: number){
        super(Category.SOFTDRINK, name, description, price, volume);
    }
}

