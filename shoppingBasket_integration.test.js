const ShoppingBasket = require('./shoppingBasket');
const Candy = require('./candy');

describe('shoppingBasket', () => {
    it('When getTotalPrice() is called without having added zero is returned', () => {
        const basket = new ShoppingBasket();
        expect(basket.getTotalPrice()).toEqual(0);
    });
    it('When we add a single item to the basket and call getTotalPrice() the items price is returned', () => {
        const basket = new ShoppingBasket();
        candy = new Candy('Twix', 2.99);
        basket.addItem(candy);
        expect(basket.getTotalPrice()).toEqual(2.99);
    });
    it('When we add multiple items to the basket and call getTotalPrice() the sum of all item prices is returned', () => {
        const basket = new ShoppingBasket();
        candy1 = new Candy('Twix', 2.99);
        candy2 = new Candy('Mars', 2.01);
        candy3 = new Candy('Maltesers', 3.50);
        basket.addItem(candy1);
        basket.addItem(candy2);
        basket.addItem(candy3);
        expect(basket.getTotalPrice()).toEqual(8.50);
    });
})