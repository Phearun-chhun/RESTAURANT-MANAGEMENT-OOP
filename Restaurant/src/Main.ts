import { Customer } from "./HumanManager/customer/Customer";
import { Gender } from "./HumanManager/Person";
import { Chief } from "./HumanManager/staff/Chief";
import { Manager } from "./HumanManager/staff/Manager";
import { Waiter } from "./HumanManager/staff/Waiter";
import { Acohol } from "./MenuManager/drink/acohol/Acohol";
import { SoftDrink } from "./MenuManager/drink/softDrink/SoftDrink";
import { Dessert } from "./MenuManager/meal/desert/Desert";
import { GeneralDish } from "./MenuManager/meal/generalDish/GeneralDish";
import { DiskSize } from "./MenuManager/meal/Meal";
import { Restuarant } from "./Restaurant";
import { Table } from "./OrderManager/table/Table";
import { OrderItemStatus } from "./OrderManager/order/OrderItemStatus";
import { PaymentManager } from "./Payment/PayManager";
import { PayByMoney } from "./Payment/PayByMoney";
import { Address } from "./Address";
import { OfflineOrder } from "./OrderManager/order/OfflineOrder";
import { Receipt } from "./Payment/Reciept";
import { OnlineOrder } from "./OrderManager/order/OnlineOrder";


let customer1 = new Customer(1, 'kaka', 38, Gender.FEMALE,2);
let customer2 = new Customer(2, 'santa', 30, Gender.MALE,2);
let customer3 = new Customer(3, 'vanda', 29, Gender.MALE,1);
let customer4 = new Customer(4, 'nara', 28, Gender.FEMALE,2);

// Address for Customer 
let address1 = new Address('371', 'Phnom Penh', 'Cambodia');
let address2 = new Address('21', 'Kandal', 'Cambodia');
let address3 = new Address('313', 'Kompot', 'Cambodia');
let address4 = new Address('333', 'London', 'UK');

let restuarant = new Restuarant('mengyi', address1);

customer1.setAddress(address1);
customer2.setAddress(address2);
customer3.setAddress(address3);
customer4.setAddress(address4);

restuarant.hr.addCustomer(customer1, customer2, customer3, customer4);

let mengyi = new Manager(12, 'Mengyi', 28, Gender.MALE);
let phearun = new Chief(13, 'phearun', 27, Gender.MALE);
let vansao = new Waiter(14, 'vansao', 20, Gender.MALE);

mengyi.setSalary(710);
phearun.setSalary(600);
vansao.setSalary(250);

restuarant.hr.addStaff(mengyi)
restuarant.hr.addStaff(phearun)
restuarant.hr.addStaff(vansao)


// MenuManager ++++++++++++++++++++++
// Normal Menu 
// Drink -----------
// + Acohol 
let whiskey = new Acohol(
    'Whiskey',
    'Whiskey is type of distilled alcoholic beverage, generally made from fermented grain mash including barley, corn, rye, and wheat.',
    500,
    25);
let abc = new Acohol(
    "ABC Extra Stout Beer",
    "ABC Extra Stout is Singapore's Original Stout of German heritage, that is produced according to stringent international quality",
    323,
    5);

let jinroSoju = new Acohol(
    "Jinro Soju",
    "Soju is a clear, distilled alcoholic beverage made most",
    750,
    21);
// + SoftDrink 
let coca = new SoftDrink(
    "Coca Cola",
    "Coco-Cola is the world’s favourite soft drink and has been enjoyed since 1886.",
    1,
    330);

let milk = new SoftDrink(
    "Fresh Milk",
    "Natural Milk and Fresh",
    1,
    330);

// + Dessert 
let applePie = new Dessert(
    "Apple Pie",
    "The pupular dessert from French",
    5,
    DiskSize.SMALL
)

let BananaDessertRecipe = new Dessert(
    "Banana Dessert Recipe",
    "Made form banana from Cambodia",
    3,
    DiskSize.SMALL
)


// + Dishes 
let friedRice = new GeneralDish(
    "Fried Rice",
    "Oyster sauce, soy sauce, grain white rice, toasted sesame oil",
    2.5,
    DiskSize.MEDIUM)

let koko = new GeneralDish(
    "Koko soup",
    "Tranditional dish from Cambodia",
    4,
    DiskSize.BIG)

let khmerNoodle = new GeneralDish(
    "Khmer Noodle",
    "Tranditional food from Cambodia",
    2,
    DiskSize.MEDIUM)

// VIP Menu 
// Drink -----------
// + Acohol 
let whiskeyLate = new Acohol(
    'WhiskeyLate',
    'Whiskey is type of distilled alcoholic beverage, generally made from fermented grain mash including barley, corn, rye, and wheat.',
    500,
    250);
let vanLantos = new Acohol(
    "vanLantos Extra Stout Beer",
    "vanLantos Extra Stout is Singapore's Original Stout of German heritage, that is produced according to stringent international quality",
    323,
    500);

let jinroJuko = new Acohol(
    "Jinro Juko",
    "Jinro Juko is a clear, distilled alcoholic beverage made most",
    750,
    800);

// + SoftDrink 
let cocaTranditional = new SoftDrink(
    "Coca Coca Tranditional",
    "Coco-Cola Tranditional is the world’s favourite soft drink and has been enjoyed since 1886.",
    333,
    333);

let orangeJucy = new SoftDrink(
    "Fresh orange Jucy",
    "Natural Orange and Fresh from Newzelen",
    100,
    500);

// + Dessert 
let appleGold = new Dessert(
    "Apple Pie Gold",
    "The pupular dessert from UK",
    50,
    DiskSize.SMALL
)

let caca = new Dessert(
    "Caca Dessert Recipe",
    "Made form coconut from Cambodia",
    50,
    DiskSize.SMALL
)

// + Dishes 
let loklak = new GeneralDish(
    "Lok Lack India",
    "The best dish in the world from India",
    50,
    DiskSize.SMALL)

let vonto = new GeneralDish(
    "Vonto soup",
    "Tranditional dish from Japan",
    60,
    DiskSize.MEDIUM)

let horacy = new GeneralDish(
    "horacy Noodle",
    "Tranditional food from Indonasia",
    25,
    DiskSize.MEDIUM)

restuarant.menu.normal.addDrink(whiskey, abc, jinroSoju, coca, milk);
restuarant.menu.normal.addFood(applePie, BananaDessertRecipe, friedRice, koko, khmerNoodle);
restuarant.menu.vip.addDrink(whiskeyLate, vanLantos, jinroJuko, cocaTranditional, orangeJucy);
restuarant.menu.vip.addFood(appleGold, caca, loklak, vonto, horacy);
let table1 = new Table(1,4);
let table2 = new Table(2,2);
table1.addCustomer(customer1);
table2.addCustomer(customer2);
let customerAddress = new Address('St.265', 'Phnom Penh', 'Cambodia');
let order1 = new OnlineOrder(1, customer1,customerAddress);
let order2 = new OfflineOrder(2, vansao);
order1.addFood(loklak);
order1.addDrink(jinroJuko);
order1.addFood(appleGold);
order1.getTotalPrice();
order2.addTable(table2);
order2.addFood(koko);
order2.addDrink(coca);
order2.addFood(appleGold);
order2.getTotalPrice();
restuarant.order.addOnlineOrder(order1);
restuarant.order.addOfflineOrder(order2);
console.log("getOfflineOrder: "+restuarant.order.getOfflineOrder());
console.log("getOnlineOrder: "+restuarant.order.getOnlineOrder());
console.log("======get staff======");
console.log(restuarant.hr.getStaff());
order1.setCook(phearun)
order2.setCook(phearun)
order2.setStatus(OrderItemStatus.COOKING)
console.log("======get all order======");
restuarant.order.getOnlineOrder();
restuarant.order.getOfflineOrder();
console.log(restuarant.order);

//payment
let paymentManager = new PaymentManager();
let pay1 =  new PayByMoney(1,order1,500);
let pay2 =  new PayByMoney(2,order2,1000);
paymentManager.addPay(pay1)
paymentManager.addPay(pay2)
console.log("======payment list======");
console.log(paymentManager.getPay());   
console.log(paymentManager.isOrderPaid(order1));
console.log(paymentManager.isOrderPaid(order2));
let receipt1 = new Receipt(1,order1,500)
let receipt2 = new Receipt(2,order2,1000)
paymentManager.addReceipt(receipt1);
paymentManager.addReceipt(receipt2);
receipt1.toPay(pay1);
console.log("======get receipt======");
console.log(paymentManager.getReceipt());
console.log(receipt1.toPay(pay1));
console.log(receipt2.toPay(pay2));

// console.log(restuarant.order);

