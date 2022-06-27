import { Gender } from "./Gender";
/**
 * Any person in the staff and customer in restaurant
 */
  export abstract class Person {
    protected phone?: number;
  
    constructor(
      protected name: string,
      protected age: number,
      protected gender: Gender
    ) {}
  
    setPhone(phone: number) {
      this.phone = phone;
    }
  }