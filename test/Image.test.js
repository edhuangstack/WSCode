const WS = require('../src/WS');

describe('Image & ImageView', () => {

    test('basic image', () => {
        let img = new WS.ImageView(new WS.Image({}));
        expect(img.getElement()).toEqual(WS.View.HTML2DOM('<img />'));
    });

    test('image with source', () => {
        let img = new WS.ImageView(new WS.Image({"href": "frog.jpg"}));
        expect(img.getElement()).toEqual(WS.View.HTML2DOM('<img src="frog.jpg"/>'));
    });

    test('complex img', () => {
        let img = new WS.ImageView(new WS.Image({"href": "frog.jpg", "width": "220px", "alt": "frog"}));
        expect(img.getElement()).toEqual(WS.View.HTML2DOM('<img src="frog.jpg" width="220px" alt="frog"/>'));
    });

});
