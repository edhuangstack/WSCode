const WS = require('../src/WS');
const data = require('./data');

describe('Product', () => {

    let product = new WS.Product(data.groups[0]);

    test('has correct name', () => {
        expect(product.name).toBe("Organic Luxe Fibrosoft&#8482; Towels - White");
    });


    test('has correct number of images', () => {
        expect(product.images.length).toEqual(4);
    });

    test('has correct first image uri', () => {
        expect(product.images[0].src).toEqual("https://www.westelm.com/weimgs/ab/images/wcm/products/201847/0012/organic-luxe-fibrosoft-towels-white-m.jpg");
    });

    test('ProductSmalLView can generate view element', () => {
        let view = new WS.ProductSmalLView(product);
        expect(view.getElement().tagName).toEqual('DIV');
    });

    test('ProductLargeView can generate view element', () => {
        let view = new WS.ProductLargeView(product);
        expect(view.getElement().tagName).toEqual('DIV');
    });

});
