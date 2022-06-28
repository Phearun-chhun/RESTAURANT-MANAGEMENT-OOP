import { Meal } from "../meal/Meal";
import { Category } from "./Category";

export abstract class MenuItem {

    constructor(protected name: string, protected description: string, protected price: number){}
    getPrice(): number{
        return this.price;
    }
}