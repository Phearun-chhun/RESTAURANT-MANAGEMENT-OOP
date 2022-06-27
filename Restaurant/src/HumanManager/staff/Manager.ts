import { Gender } from "../Gender";
import { Staff, StaffCategory } from "./Staff";

export class Manager extends Staff {
    constructor(category:StaffCategory=StaffCategory.MANAGER,name: string, age: number, gender: Gender) {
        super(category,name, age, gender);
      }
}