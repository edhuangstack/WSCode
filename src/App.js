const WS = require('./WS');

import './sass/App.scss'


document.body.onload = () => {

    var request = new XMLHttpRequest();
    request.open('GET', '/entry/catalog/index.json', true);
    request.onload = () => {
        let json = JSON.parse(request.responseText);
        let shop = new WS.Shop(json);
        let shopView = new WS.ShopView(shop);

        // Inject root view element into document
        document.body.appendChild(shopView.getElement());
    };
    request.send();
}
