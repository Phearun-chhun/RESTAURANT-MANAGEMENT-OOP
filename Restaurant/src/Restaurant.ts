import { HumanManager } from "./HumanManager/HumanManager";
import { MenuManager } from "./MenuManager/MenuManager";
import { OrderManager } from "./OrderManager/OrderManager";

export class Restuarant {
    private address?: string;
    private name: string;

    public hr: HumanManager = new HumanManager();
    public order: OrderManager = new OrderManager();
    public menu: MenuManager = new MenuManager();


    constructor(name: string, address?: string){
        this.name = name;
        this.address = address;
    }
}