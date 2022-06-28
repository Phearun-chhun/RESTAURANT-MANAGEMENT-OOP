import { Drink } from "../Drink";
import { Category } from "../../menu/Category";


export class Acohol extends Drink {
    constructor(name: string, description: string, volume: number, price: number){
        super(Category.ACOHOLDRINK, name, description, volume, price);
    }
}

