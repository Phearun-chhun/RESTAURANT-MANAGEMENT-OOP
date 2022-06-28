export enum Category {
    SOFTDRINK = 'SOFTDRINK',
    ACOHOLDRINK = 'ALCOHOLDRINK',
    DESSERT = 'DESSERT',
    DISH = 'DISH',
}
export abstract class MenuItem {

    constructor(protected name: string, protected description: string, protected price: number){}
    getPrice(): number{
        return this.price;
    }
}