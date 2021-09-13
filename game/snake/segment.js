import Position from '../position.js';
import DIRECTIONS from "../directions.js";

export default class {
    constructor(x, y) {
        this.position = new Position(x, y);
    }

    getPosition() {
        return this.position;
    }

    setPosition(x, y) {
        this.position.x = x;
        this.position.y = y;
    }

    move(direction) {
        if (direction === DIRECTIONS.UP) {
            this.position.y++;
        } else if (direction === DIRECTIONS.RIGHT) {
            this.position.x++;
        } else if (direction === DIRECTIONS.DOWN) {
            this.position.y--;
        } else if (direction === DIRECTIONS.LEFT) {
            this.position.x--;
        }
    }
}