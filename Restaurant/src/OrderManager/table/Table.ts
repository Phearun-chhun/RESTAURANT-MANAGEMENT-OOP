import { createBuilderStatusReporter } from "typescript";
import { Chair } from "./Chair";

export class Table {
    private chairs:Chair[]=[];
    constructor( number: number, protected description: string, protected chairNumber: number){}
   getNumberOfChairs(){
    return this.chairs.length;
   }
   getChair(){
    return this.chairs;
   }
   addChair(chair:Chair){
    return this.chairs.push(chair)
   }
   getFreeChair():Chair|undefined{
        for(let chair of this.chairs){
            if(!chair.hasCustomer()){
                return chair;
            }
        }
        return undefined; 
   }
}