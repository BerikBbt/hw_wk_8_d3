"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const item_1 = require("./item");
const user = (0, user_1.createUser)('Berik Bbt', 30);
const item1 = (0, item_1.createItem)(20, 'Item 1', 10, 'Description Apple');
const item2 = (0, item_1.createItem)(30, 'Item 2', 15, 'Description Banana');
const item3 = (0, item_1.createItem)(40, 'Item 3', 20, 'Description Coconut');
const item4 = (0, item_1.createItem)(50, 'Item 4', 25, 'Description Dolphin');
const item5 = (0, item_1.createItem)(60, 'Item 5', 30, 'Description Elephant');
(0, user_1.addToCart)(user, item1);
(0, user_1.printCart)(user);
console.log('Cart Total:', (0, user_1.cartTotal)(user));
(0, user_1.addToCart)(user, item2);
(0, user_1.addToCart)(user, item3);
(0, user_1.addToCart)(user, item1);
(0, user_1.addToCart)(user, item5);
(0, user_1.addToCart)(user, item4);
(0, user_1.printCart)(user);
console.log('Cart Total:', (0, user_1.cartTotal)(user));
(0, user_1.removeFromCart)(user, item1);
(0, user_1.printCart)(user);
console.log('Cart Total:', (0, user_1.cartTotal)(user));