import { Category, MenuItem } from "../menu/MenuItem";

export class Drink extends MenuItem {
   /**
 * volume: number of mililiter(ml) per item
 * price: equal to number of dollars per item
 */
   constructor(protected category: Category, name: string, description: string, private volume: number, price: number) {
      super(name, description, price);
   }
}
