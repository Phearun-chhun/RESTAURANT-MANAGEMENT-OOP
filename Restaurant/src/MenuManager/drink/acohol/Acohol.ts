import { Category } from "../../menu/MenuItem";
import { Drink } from "../Drink";


export class Acohol extends Drink {
    constructor(name: string, description: string, volume: number, price: number){
        super(Category.ACOHOLDRINK, name, description, volume, price);
    }
}

