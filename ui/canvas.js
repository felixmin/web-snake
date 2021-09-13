import Settings from './../settings.js';

export default class {
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
    }

    setCanvasSize() {
        let screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

        if (screenWidth < 992) { //TODO magic
            this.tileSize = screenWidth / Settings.WIDTH;
        } else {
            this.tileSize = Settings.TILE_SIZE; //todo tile size nur falls größer min widht relevant
        }

        this.ctx.canvas.width = Settings.WIDTH * Settings.TILE_SIZE;
        this.ctx.canvas.height = Settings.HEIGHT * Settings.TILE_SIZE;


        document.getElementById("btns").style.height = (screenHeight - this.ctx.canvas.height) + "px";
    }

    fillTile(x, y, color) {
        this.ctx.beginPath();
        this.ctx.rect(x * Settings.TILE_SIZE, y * Settings.TILE_SIZE, Settings.TILE_SIZE, Settings.TILE_SIZE);
        this.ctx.fillStyle = color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    drawText(text, font, color, x, y) {
        this.ctx.beginPath();
        this.ctx.font = font;
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, x, y);
        this.ctx.closePath();
    }
}
