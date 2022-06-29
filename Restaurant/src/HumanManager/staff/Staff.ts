import { Gender, Person } from "../Person";
import { Manager } from "./Manager";

export enum StaffCategory {
    WAITER = 'WAITER',
    MANAGER = 'MANAGER',
    CHIEF = 'CHIEF',
  }
  
export class Staff extends Person {
  private salary: number = 0; //​ by default
    constructor(
      protected category: StaffCategory,
      id:number,
      name: string,
      age: number,
      gender: Gender
    ) {
      super(id,name, age, gender);
    }
  
    setSalary(salary: number) {
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
    getCategory() {
      return this.category;
  }

  }