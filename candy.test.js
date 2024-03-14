const Candy = require('./candy');

describe('candy', () => {
    it('When the constructor is called the class instance is created with a name and price', () => {
        const candy = new Candy('Twix', 2.99);
        expect(candy.name).toEqual('Twix');
        expect(candy.price).toEqual(2.99);
    });
    it('When getName() is called the output is the candys name', () => {
        const candy = new Candy('Twix', 2.99);
        expect(candy.getName()).toEqual('Twix');
    });
    it('When getPrice() is called the output is the candys price', () => {
        const candy = new Candy('Twix', 2.99);
        expect(candy.getPrice()).toEqual(2.99);
    });
})