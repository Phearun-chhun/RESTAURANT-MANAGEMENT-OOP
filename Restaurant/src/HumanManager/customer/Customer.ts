import { Gender } from "../Gender";
import { Person } from "../Person";
import {Order} from "../../OrderManager/order/Order";
export class Customer extends Person {
    orderItem: Order[];
    constructor(
        id:number,
        name: string,
        age: number,
        gender: Gender
      ) {
        super(id,name, age, gender)
    }
}