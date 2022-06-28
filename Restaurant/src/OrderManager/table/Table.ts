import { createBuilderStatusReporter } from "typescript";

export class Table {
    public isTableFree: boolean = true;
    constructor(protected id: number, protected chairNumber: number){}


   getTableId(): number{
    return this.id;
   }

}