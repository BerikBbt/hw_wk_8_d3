import { createUser, addToCart, removeFromCart, removeQuantityFromCart, cartTotal, printCart } from './user';
import { createItem } from './item'; 

const user = createUser('Berik Bbt', 30);

const item1 = createItem(20, 'Item 1', 10, 'Description Apple');
const item2 = createItem(30, 'Item 2', 15, 'Description Banana');
const item3 = createItem(40, 'Item 3', 20, 'Description Coconut');
const item4 = createItem(50, 'Item 4', 25, 'Description Dolphin');
const item5 = createItem(60, 'Item 5', 30, 'Description Elephant');

addToCart(user, item1);

printCart(user);

console.log('Cart Total:', cartTotal(user));

addToCart(user, item2);
addToCart(user, item3);
addToCart(user, item1);
addToCart(user, item5);
addToCart(user, item4);

printCart(user);

console.log('Cart Total:', cartTotal(user));

removeFromCart(user, item1);

printCart(user);

console.log('Cart Total:', cartTotal(user));