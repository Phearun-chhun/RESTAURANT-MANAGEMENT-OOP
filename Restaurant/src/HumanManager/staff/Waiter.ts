import { Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";

export class Waiter extends Staff{
    constructor(id:number,name: string, age: number, gender: Gender) {
        super(StaffCategory.WAITER,id,name, age, gender);
      }
}