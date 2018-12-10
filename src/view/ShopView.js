const WS = require('../WS');

class ShopView extends WS.View {

    getElement() {
        // Basic page Elements
        let header = document.createElement('header');
        header.innerHTML = `<h1>WestElm Coding Challenge</h1>`;
        let section = document.createElement('section');

        // Compose list of Products
        let prodList = document.createElement('ul');
        prodList.setAttribute('class', 'shop');
        this.model.products.forEach(product => {
            let prodView = new WS.ProductSmalLView(product);
            let prodItem = document.createElement('li');
            prodItem.appendChild(prodView.getElement());
            prodList.appendChild(prodItem);
        });
        section.appendChild(prodList);

        // Large View Husk
        let lb = document.createElement('div');
        lb.setAttribute('id', 'lightbox');
        lb.onclick = () => {
            lb.style.display = 'none';
        };
        let largeProduct = document.createElement('div');
        largeProduct.setAttribute('id', 'largeProduct');
        lb.appendChild(largeProduct);
        lb.style.display = 'none';

        // Shop Composition
        let element = document.createElement('div');
        element.setAttribute('id', 'container');
        element.appendChild(header);
        element.appendChild(section);
        element.appendChild(lb);
        return element;
    }

};

module.exports = ShopView;
