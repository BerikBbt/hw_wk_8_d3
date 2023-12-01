"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printCart = exports.cartTotal = exports.removeQuantityFromCart = exports.removeFromCart = exports.addToCart = exports.createUser = void 0;
const uuid_1 = require("uuid");
function createUser(name, age) {
    return {
        id: (0, uuid_1.v4)(),
        name,
        age,
        cart: [],
    };
}
exports.createUser = createUser;
function addToCart(user, item) {
    user.cart.push(item);
}
exports.addToCart = addToCart;
function removeFromCart(user, item) {
    user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
}
exports.removeFromCart = removeFromCart;
function removeQuantityFromCart(user, item, quantity) {
    const index = user.cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
        user.cart[index].quantity -= quantity;
        if (user.cart[index].quantity <= 0) {
            user.cart.splice(index, 1);
        }
    }
}
exports.removeQuantityFromCart = removeQuantityFromCart;
function cartTotal(user) {
    return user.cart.reduce((total, item) => total + item.price, 0);
}
exports.cartTotal = cartTotal;
function printCart(user) {
    console.log('User Cart:');
    user.cart.forEach((item) => {
        console.log(`- ${item.name}: $${item.price}`);
    });
}
exports.printCart = printCart;
