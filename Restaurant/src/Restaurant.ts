import { Address } from "./Address";
import { HumanManager } from "./HumanManager/HumanManager";
import { MenuManager } from "./MenuManager/MenuManager";
import { OrderManager } from "./OrderManager/OrderManager";
import { PaymentManager } from "./Payment/PayManager";

export class Restuarant {
    private address?: Address;
    private name: string;

    public hr: HumanManager = new HumanManager();
    public order: OrderManager = new OrderManager();
    public menu: MenuManager = new MenuManager();
    public payment: PaymentManager = new PaymentManager();


    constructor(name: string, address?: Address){
        this.name = name;
        this.address = address;
    }
}