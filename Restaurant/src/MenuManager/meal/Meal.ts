import { Category } from "../menu/Category";
import { MenuItem } from "../menu/MenuItem";

export enum DiskSide {
    BIG = 'BIG',
    MEDIUM = 'MEDIUM',
    SMALL = 'SMALL',
}

export class Meal extends MenuItem{
    constructor(protected dishSide: DiskSide, protected category: Category, name:string,description:string, price: number){
        super(name,description, price)
    }
}