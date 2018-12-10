const WS = require('../WS');

class Shop {

    constructor(json) {
        this.name = json.name;

        this.products = new Array();
        json.groups.forEach(group => {
            this.products.push(new WS.Product(group));
        });
    }
}

module.exports = Shop;
