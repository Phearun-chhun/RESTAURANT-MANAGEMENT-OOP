import { Category, MenuItem } from "../menu/MenuItem";

export enum DiskSize {
    BIG = 'BIG',
    MEDIUM = 'MEDIUM',
    SMALL = 'SMALL',
}

export class Meal extends MenuItem{
    constructor(protected dishSize: DiskSize, protected category: Category, name:string,description:string, price: number){
        super(name,description, price)
    }

    getCategory(): Category {
       return this.category;
    }
}