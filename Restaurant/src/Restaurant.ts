import { Address } from "./Address";
import { HumanManager } from "./HumanManager/HumanManager";
import { MenuManager } from "./MenuManager/MenuManager";
import { OrderManager } from "./OrderManager/OrderManager";

export class Restuarant {
    private address?: Address;
    private name: string;

    public hr: HumanManager = new HumanManager();
    public order: OrderManager = new OrderManager();
    public menu: MenuManager = new MenuManager();


    constructor(name: string, address?: Address){
        this.name = name;
        this.address = address;
    }
}