const WS = require('../WS');

class ImageView extends WS.View {

    getElement() {
        let element = document.createElement('img');

        if (this.model && this.model.alt)
            element.setAttribute('alt', this.model.alt);

        if (this.model && this.model.src)
            element.setAttribute('src', this.model.src);

        if (this.model && this.model.width)
            element.setAttribute('width', this.model.width);

        return element;
    }
}

module.exports = ImageView;
