import { Gender, Person } from "../Person";
import {Order} from "../../OrderManager/order/Order";
export class Customer extends Person {
    constructor(
        id:number,
        name: string,
        age: number,
        gender: Gender,
      ) {
        super(id,name, age, gender)
    }
    isEqual(other:Customer) {
      return this.id === other.id && 
      this.name === other.name &&
      this.age === other.age &&
      this.gender === other.gender
    }
}



