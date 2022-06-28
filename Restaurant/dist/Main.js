"use strict";
exports.__esModule = true;
var Customer_1 = require("./HumanManager/customer/Customer");
var Person_1 = require("./HumanManager/Person");
var Chief_1 = require("./HumanManager/staff/Chief");
var Manager_1 = require("./HumanManager/staff/Manager");
var Waiter_1 = require("./HumanManager/staff/Waiter");
var Chair_1 = require("./OrderManager/table/Chair");
var Acohol_1 = require("./MenuManager/drink/acohol/Acohol");
var SoftDrink_1 = require("./MenuManager/drink/softDrink/SoftDrink");
var Desert_1 = require("./MenuManager/meal/desert/Desert");
var GeneralDish_1 = require("./MenuManager/meal/generalDish/GeneralDish");
var Meal_1 = require("./MenuManager/meal/Meal");
var Restaurant_1 = require("./Restaurant");
var Table_1 = require("./OrderManager/table/Table");
var Order_1 = require("./OrderManager/order/Order");
var OrderItemStatus_1 = require("./OrderManager/order/OrderItemStatus");
var restuarant = new Restaurant_1.Restuarant('mengyi', 'Phnom Penh');
var customer1 = new Customer_1.Customer(1, 'kaka', 38, Person_1.Gender.FEMALE);
var customer2 = new Customer_1.Customer(2, 'santa', 30, Person_1.Gender.MALE);
var customer3 = new Customer_1.Customer(3, 'vanda', 29, Person_1.Gender.MALE);
var customer4 = new Customer_1.Customer(4, 'nara', 28, Person_1.Gender.FEMALE);
restuarant.hr.addCustomer(customer1, customer2, customer3, customer4);
var mengyi = new Manager_1.Manager(12, 'Mengyi', 28, Person_1.Gender.MALE);
var mengyi2 = new Manager_1.Manager(12, 'Mengyi2', 28, Person_1.Gender.MALE);
var phearun = new Chief_1.Chief(13, 'phearun', 27, Person_1.Gender.MALE);
var vansao = new Waiter_1.Waiter(14, 'vansao', 20, Person_1.Gender.MALE);
restuarant.hr.addManager(mengyi);
restuarant.hr.addStaff(phearun);
restuarant.hr.addStaff(vansao);
// MenuManager +++++++++++++++++
// Normal Menu 
// Drink -----------
// + Acohol 
var whiskey = new Acohol_1.Acohol('Whiskey', 'Whiskey is type of distilled alcoholic beverage, generally made from fermented grain mash including barley, corn, rye, and wheat.', 500, 25);
var abc = new Acohol_1.Acohol("ABC Extra Stout Beer", "ABC Extra Stout is Singapore's Original Stout of German heritage, that is produced according to stringent international quality", 323, 5);
var jinroSoju = new Acohol_1.Acohol("Jinro Soju", "Soju is a clear, distilled alcoholic beverage made most", 750, 21);
// + SoftDrink 
var coca = new SoftDrink_1.SoftDrink("Coca Cola", "Coco-Cola is the world’s favourite soft drink and has been enjoyed since 1886.", 1, 330);
var milk = new SoftDrink_1.SoftDrink("Fresh Milk", "Natural Milk and Fresh", 1, 330);
// + Dessert 
var applePie = new Desert_1.Dessert("Apple Pie", "The pupular dessert from French", 5, Meal_1.DiskSize.SMALL);
var BananaDessertRecipe = new Desert_1.Dessert("Banana Dessert Recipe", "Made form banana from Cambodia", 3, Meal_1.DiskSize.SMALL);
// + Dishes 
var friedRice = new GeneralDish_1.GeneralDish("Fried Rice", "Oyster sauce, soy sauce, grain white rice, toasted sesame oil", 2.5, Meal_1.DiskSize.MEDIUM);
var koko = new GeneralDish_1.GeneralDish("Koko soup", "Tranditional dish from Cambodia", 4, Meal_1.DiskSize.BIG);
var khmerNoodle = new GeneralDish_1.GeneralDish("Khmer Noodle", "Tranditional food from Cambodia", 2, Meal_1.DiskSize.MEDIUM);
// VIP Menu 
// Drink -----------
// + Acohol 
var whiskeyLate = new Acohol_1.Acohol('WhiskeyLate', 'Whiskey is type of distilled alcoholic beverage, generally made from fermented grain mash including barley, corn, rye, and wheat.', 500, 250);
var vanLantos = new Acohol_1.Acohol("vanLantos Extra Stout Beer", "vanLantos Extra Stout is Singapore's Original Stout of German heritage, that is produced according to stringent international quality", 323, 500);
var jinroJuko = new Acohol_1.Acohol("Jinro Juko", "Jinro Juko is a clear, distilled alcoholic beverage made most", 750, 800);
// + SoftDrink 
var cocaTranditional = new SoftDrink_1.SoftDrink("Coca Coca Tranditional", "Coco-Cola Tranditional is the world’s favourite soft drink and has been enjoyed since 1886.", 333, 333);
var orangeJucy = new SoftDrink_1.SoftDrink("Fresh orange Jucy", "Natural Orange and Fresh from Newzelen", 100, 500);
// + Dessert 
var appleGold = new Desert_1.Dessert("Apple Pie Gold", "The pupular dessert from UK", 50, Meal_1.DiskSize.SMALL);
var caca = new Desert_1.Dessert("Caca Dessert Recipe", "Made form coconut from Cambodia", 50, Meal_1.DiskSize.SMALL);
// + Dishes 
var loklak = new GeneralDish_1.GeneralDish("Lok Lack India", "The best dish in the world from India", 50, Meal_1.DiskSize.SMALL);
var vonto = new GeneralDish_1.GeneralDish("Vonto soup", "Tranditional dish from Japan", 60, Meal_1.DiskSize.MEDIUM);
var horacy = new GeneralDish_1.GeneralDish("horacy Noodle", "Tranditional food from Indonasia", 25, Meal_1.DiskSize.MEDIUM);
restuarant.menu.normal.addDrink(whiskey, abc, jinroSoju, coca, milk);
restuarant.menu.normal.addFood(applePie, BananaDessertRecipe, friedRice, koko, khmerNoodle);
restuarant.menu.vip.addDrink(whiskeyLate, vanLantos, jinroJuko, cocaTranditional, orangeJucy);
restuarant.menu.vip.addFood(appleGold, caca, loklak, vonto, horacy);
// console.log(restuarant);
var chair1 = new Chair_1.Chair(1);
var chair2 = new Chair_1.Chair(2);
var chair3 = new Chair_1.Chair(3);
var chair4 = new Chair_1.Chair(4);
var table1 = new Table_1.Table(1, 4);
var table2 = new Table_1.Table(2, 2);
table1.addChair(chair1);
table1.addChair(chair2);
table1.addChair(chair3);
table1.addChair(chair4);
table2.addChair(chair3);
table2.addChair(chair4);
var order1 = new Order_1.Order(1, customer1, vansao, OrderItemStatus_1.OrderItemStatus.LISTED);
var order2 = new Order_1.Order(2, customer2, vansao, OrderItemStatus_1.OrderItemStatus.LISTED);
order1.addTable(table1);
order1.addFood(loklak);
order1.addDrink(jinroJuko);
order1.addFood(appleGold);
order1.getTotalPrice();
order2.addTable(table1);
order2.addFood(loklak);
order2.addDrink(jinroJuko);
order2.addFood(appleGold);
order2.getTotalPrice();
// console.log(order1);
// console.log(order2);
restuarant.order.addOrder(order1);
restuarant.order.addOrder(order2);
restuarant.order.customerOrder(customer1);
restuarant.order.customerOrder(customer2);
// console.log(restuarant);
// console.log(restuarant.menu.vip);
console.log(restuarant.order.getOrders());
