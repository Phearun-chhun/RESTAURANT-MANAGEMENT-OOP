import { Gender, Person } from "../Person";

export enum StaffCategory {
    WAITER = 'WAITER',
    MANAGER = 'MANAGER',
    CHIEF = 'CHIEF',
  }
  
export class Staff extends Person {
    protected salary: number = 0; //​ by default
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