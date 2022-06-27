import { Gender } from "../Gender";
import { Staff, StaffCategory } from "./Staff";

export class Waiter extends Staff{
    constructor(category:StaffCategory=StaffCategory.MANAGER,id:number,name: string, age: number, gender: Gender) {
        super(category,id,name, age, gender);
      }
}