const WS = require('../WS');

class ProductSmallView extends WS.View {


    onImageClick() {
        alert('message');
    }

    getElement() {
        let imageView = new WS.ImageView(this.model.images[0]);
        let imageElement = imageView.getElement();

        // Event Handlers
        imageElement.onclick = () => {
            let largeView = new WS.ProductLargeView(this.model);
            let oldChild = document.getElementById('largeProduct');
            document.getElementById('lightbox').replaceChild(largeView.getElement(), oldChild);
            document.getElementById('lightbox').style.display = 'block';
        };
        imageElement.onmouseover = () => { imageElement.style.transform = 'scale(1.1)'; };
        imageElement.onmouseout = () => { imageElement.style.transform = 'scale(1.0)'; };

        // Price Bar
        let selling = `<p class="selling">\$${this.model.priceRange.selling.low}-\$${this.model.priceRange.selling.high}</p>`;
        let priceBar = document.createElement('div');
        priceBar.setAttribute('class', 'priceBar');
        priceBar.innerHTML = selling;

        // Title
        let title = document.createElement('p');
        title.setAttribute('class', 'title');
        title.innerText = this.model.name;

        // Compose Element
        let div = document.createElement('div');
        div.setAttribute('class', 'product');
        div.appendChild(imageElement);
        div.appendChild(title);
        div.appendChild(priceBar);
        return div;
    }
}

module.exports = ProductSmallView;
