const WS = require('../src/WS');

describe('src.model.Shop', () => {

    const data = require('./data');
    let shop = new WS.Shop(data);

    test('shop has name from json', () => {
        expect(shop.name).toBe('All New');
    });

    test('product count', () => {
        expect(shop.products.length).toBe(10);
    });

    test('first product\'s name', ()=> {
        expect(shop.products[0].name).toBe('Organic Luxe Fibrosoft&#8482; Towels - White');
    });

    test('ShopView can generate view element', ()=> {
        let view = new WS.ShopView(shop);
        expect(view.getElement().tagName).toEqual('DIV');
    });

});
