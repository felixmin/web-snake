import Segment from './segment.js';

export default class {
    body = [];
    direction;

    constructor(x, y, direction) {
        this.body.push(new Segment(x, y));
        this.direction = direction;
    }

    moveSnake() {
        for (let i = this.body.length - 1; i > 0; i--) {
            this.body[i].position = this.body[i-1].position;
        }

        this.body[0].move(this.direction);
    }

    addSegment() {
        this.body.push(Object.assign(this.body[0].position).move(this.direction));
    }

    getNextHeadPosition() {
        return Object.assign(this.body[0].position).move(this.direction);
    }

    getLength() {
        return this.body.length;
    }

    getBody() {
        return this.body;
    }

    getSegmentPosition(number) {
        return this.body[number].getPosition();
    }

    setDirection(direction) {
        this.direction = direction;
    }

    checkBodyCollision() {
        snakebody.some( s => {
            if (s[0] == snakeX && s[1] == snakeY) {
                gameOver();
            }
        })
    }
}