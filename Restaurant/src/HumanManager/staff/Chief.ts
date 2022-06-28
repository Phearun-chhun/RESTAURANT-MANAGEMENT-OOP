import { OrderItem } from "../../OrderManager/order/OrderItem";
import { OrderItemStatus } from "../../OrderManager/order/OrderItemStatus";
import { Gender, Person } from "../Person";
import { Staff, StaffCategory } from "./Staff";


export class Chief extends Staff {
  isCooking: OrderItemStatus;
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
 
}
