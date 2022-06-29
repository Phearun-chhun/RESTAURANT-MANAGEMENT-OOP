import { Address } from "../Address";

export enum Gender{
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}
/**
 * Any person in the staff and customer in restaurant
 */
  export abstract class Person {
    protected phone?: number;
    protected address: Address;
  
    constructor(
      protected id:number,
      protected name: string,
      protected age: number,
      protected gender: Gender
    ) {}
  
    setPhone(phone: number) {
      this.phone = phone;
    }

    setAddress(address: Address) {
      this.address = address;
    }
  }