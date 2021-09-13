import canvas from './canvas.js';

export default class {
    constructor (ui) {
        if (ui instanceof HTMLElement) {
            this.ui = new canvas(ui);
        } else {
            throw "Has to receive HTMLElement!";
        }
    }

    setSize() {
        this.ui.setCanvasSize();
    }

    fillTile(x, y, color) {
        this.ui.fillTile(x, y, color);
    }

    clear() {
        this.ui.clearCanvas();
    }

    drawText(text, font, color, x, y) {
        this.ui.drawText(text, font, color, x, y);
    }
}