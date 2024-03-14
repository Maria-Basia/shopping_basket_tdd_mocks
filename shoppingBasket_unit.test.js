const ShoppingBasket = require('./shoppingBasket');

describe('shoppingBasket', () => {
    it('When we add a single item to the basket and call getTotalPrice() the items price is returned', () => {
        const basket = new ShoppingBasket();
        const candyDouble = {
            name: 'Twix',
            price: 2.99,
            getName : () => 'Twix',
            getPrice : () => 2.99
        }
        basket.addItem(candyDouble);
        expect(basket.getTotalPrice()).toEqual(2.99);
    });
    it('When we add multiple items to the basket and call getTotalPrice() the sum of all item prices is returned', () => {
        const basket = new ShoppingBasket();
        const candyDouble1 = {
            name: 'Twix',
            price: 2.99,
            getName : () => 'Twix',
            getPrice : () => 2.99
        }
        const candyDouble2 = {
            name: 'Mars',
            price: 2.01,
            getName : () => 'Mars',
            getPrice : () => 2.01
        }
        const candyDouble3 = {
            name: 'Maltesers',
            price: 3.50,
            getName : () => 'Maltesers',
            getPrice : () => 3.50
        }
        basket.addItem(candyDouble1);
        basket.addItem(candyDouble2);
        basket.addItem(candyDouble3);
        expect(basket.getTotalPrice()).toEqual(8.50);
    });
})