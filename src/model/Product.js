const WS = require('../WS');

class Product {

    constructor(json) {
        this.name = json.name;
        this.priceRange = json.priceRange;

        this.images = new Array();

        this.images.push(new WS.Image(json.hero));
        json.images.map(image => {
            this.images.push(new WS.Image(image));
        });

    }
};

module.exports = Product;
