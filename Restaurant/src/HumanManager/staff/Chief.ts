import { Gender, Person } from "../Person";
import { Staff, StaffCategory } from "./Staff";

/**
 * 
 */
export class Chief extends Staff {
  constructor(category:StaffCategory=StaffCategory.CHIEF,  id:number,name: string, age: number, gender: Gender) {
    super(category,id,name, age, gender);
  }
  isEqual(other:Chief):boolean{
    return  (
      this.name == other.name && 
      this.age == other.age &&
      this.gender == other.gender &&
      this.category == other.category 
    )
  }
}
