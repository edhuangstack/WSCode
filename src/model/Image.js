const WS = require('../WS');

class Image {

    constructor(json) {
        if (json) {
            this.src = json.href;
            this.alt = json.alt;
            this.width = json.width;
        }
    }
}

module.exports = Image;
