const WS = require('../WS');

class ProductLargeView extends WS.View {

    constructor(model) {
        super(model);
        this.index = 0;
    }

    prevImage() {
        this.index = (this.index - 1 + this.model.images.length) % this.model.images.length;
        this.updateView();
    }

    setImage(n) {
        this.index = n;
        this.updateView();
    }

    nextImage() {
        this.index = (this.index + 1 + this.model.images.length) % this.model.images.length;
        this.updateView();
    }

    updateView() {
        let carousel = this.carousel;

        this.hero.setAttribute('src', this.model.images[this.index].src);

        for (let n = 0; n < carousel.children.length; n++) {
            let child = carousel.children[n];
            if (n == this.index)
                child.setAttribute('class', 'current');
            else
                child.setAttribute('class', 'notCurrent');
        }
    }

    getElement() {
        let container = document.createElement('div');
        container.setAttribute('id', 'largeProduct');
        container.onclick = (ev) => { ev.stopPropagation(); };

        // Title
        let title = document.createElement('h3');
        title.innerText = this.model.name;
        container.appendChild(title);

        // Hero
        let currentImage = this.model.images[this.index];
        let image = new WS.ImageView(currentImage);
        let imageElement = image.getElement();
        imageElement.setAttribute('id', 'hero');
        this.hero = imageElement;
        container.appendChild(imageElement);

        // Exit Link
        let buttonExit = document.createElement('a');
        buttonExit.setAttribute('id', 'buttonExit');
        buttonExit.innerHTML = '&times';
        container.appendChild(buttonExit);
        buttonExit.onclick = () => {
            document.getElementById('lightbox').style.display = 'none';
        };

        // Prev Link
        let buttonPrev = document.createElement('a');
        buttonPrev.setAttribute('id', 'buttonPrev');
        buttonPrev.innerHTML = '<img src="./assets/prev.png" />';
        container.appendChild(buttonPrev);
        buttonPrev.onclick = () => {
            this.prevImage();
        };

        // Next Link
        let buttonNext = document.createElement('a');
        buttonNext.setAttribute('id', 'buttonNext');
        buttonNext.innerHTML = '<img src="./assets/next.png" />';
        container.appendChild(buttonNext);
        buttonNext.onclick = () => {
            this.nextImage();
        };

        let carousel = document.createElement('div');
        carousel.setAttribute('id', 'carousel');
        this.carousel = carousel;

        this.model.images.forEach((image, n) => {
            let thumbView = new WS.ImageView(image);
            let thumbElem = thumbView.getElement();
            thumbElem.onclick = () => {
                this.setImage(n)
            };
            carousel.appendChild(thumbElem);
        });
        container.appendChild(carousel);

        this.updateView();

        return container;
    }
}

module.exports = ProductLargeView;
