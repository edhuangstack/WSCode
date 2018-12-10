

class View {

    constructor(model) {
        if (this.constructor == View) {
            throw new Error('Abstract class instantiated.');
        }
        this.model = model;
    }

    static HTML2DOM(html) {
        let template = document.createElement('template');
        template.innerHTML = html;
        return template.content.firstChild;
    }

    getElement() {
        throw new Error('Abstract method invoked.');
    }
};

module.exports = View;
