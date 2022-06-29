import { Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";

export class Delivery extends Staff{
    constructor(id:number,name: string, age: number, gender: Gender) {
        super(StaffCategory.DELEVERY,id,name, age, gender);
      }
}