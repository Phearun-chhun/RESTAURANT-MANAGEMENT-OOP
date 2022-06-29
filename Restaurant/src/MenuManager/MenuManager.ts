import { MenuCategory, MenuType } from "./MenuCategory";
export class MenuManager {
    public vip: MenuCategory = new MenuCategory(MenuType.VIP, 'The best foods & drinks with costly');
    public normal: MenuCategory = new MenuCategory(MenuType.NORMAL, 'The good foods & drinks with inexpensive');
}
