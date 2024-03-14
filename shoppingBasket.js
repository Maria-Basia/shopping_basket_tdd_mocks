class ShoppingBasket {

constructor() {
    this.basket = [];
}
//getTotalPrice()
getTotalPrice() {
    let total = 0;
    this.basket.forEach((item) => {
        total += item.getPrice();
    });
    return total;
}
//addItem()
addItem(new_candy) {
    this.basket = this.basket.concat(new_candy);
}

}

module.exports = ShoppingBasket;