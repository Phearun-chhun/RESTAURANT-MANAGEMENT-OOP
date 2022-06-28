import { Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";

export class Manager extends Staff {
    constructor(id: number, name: string, age: number, gender: Gender) {
        super(StaffCategory.MANAGER, id, name, age, gender);
      }
}