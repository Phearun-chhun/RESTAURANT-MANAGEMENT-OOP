import { MenuCategory } from "./MenuCategory";

export class MenuManager {
    private menuCategory:MenuCategory[]=[];
    addMenuCategory(menuCategory:MenuCategory){
        this.menuCategory.push(menuCategory);
    }
    getMenuCategory(){
        return this.menuCategory;
    }
}