import Position from './position.js';

export default class {
    width;
    height;
    food;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getFoodPosition() {
        return this.food;
    }

    generateNewFood() {
        this.food = new Position(this.getRandomNumber(0, this.width - 1), this.getRandomNumber(0, this.height - 1));
        //todo not spawn in snake
    }

    getRandomNumber(start, end) {
        return Math.ceil(Math.random() * (end - start) + start);
    }
}