export default class {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static checkDistance(pos1, pos2) {
        return Math.abs(pos1.x - pos2.x) + Math.abs(pos1.y - pos2.y);
    }
}