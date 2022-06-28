import { createBuilderStatusReporter } from "typescript";
import { Chair } from "./Chair";

export class Table {
    private chairs:Chair[]=[];
    public isTableFree: boolean = true;
    constructor(protected id: number, protected chairNumber: number){}
   getNumberOfChairs(){
    return this.chairs.length;
   }
   getChair(){
    return this.chairs;
   }
   addChair(chair:Chair){
    return this.chairs.push(chair)
   }

   getTableId(): number{
    return this.id;
   }

}