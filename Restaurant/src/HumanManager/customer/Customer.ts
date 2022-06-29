import { Gender, Person } from "../Person";
import {Order} from "../../OrderManager/order/Order";
export class Customer extends Person {

    constructor(
        id:number,
        name: string,
        age: number,
        gender: Gender,
        private member:number
      ) {
        super(id,name, age, gender);
  }
  getMember() {
    return this.member;
  }
    isEqual(other:Customer) {
      return this.id === other.id && 
      this.name === other.name &&
      this.age === other.age &&
      this.gender === other.gender &&
      this.member==other.member
    }
}



