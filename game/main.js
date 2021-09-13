import Snake from './snake/snake.js';
import Board from './board.js';
import Settings from '../settings.js';

export default class {
    view;
    snake = new Snake(Settings.START_POSITION_X, Settings.START_POSITION_Y);
    board = new Board(Settings.WIDTH, Settings.HEIGHT);
    score;

    constructor(view) {
        this.view = view;
    }

    gameLoopInterval = setInterval(this.gameLoop, Settings.LOOP_INTERVAL);

    gameLoop() {
        this.view.setSize();
        this.view.clear();

        if (this.snake.getNextHeadPosition() === this.board.getFoodPosition()) {
            this.snake.addSegment();
            this.score++;
            this.board.generateNewFood(this.snake);
        } else {
            this.snake.moveSnake();
        }

        this.view.fillTile(snake.getHead(), Settings.SNAKE_BODY_COLOR);

        for (let i = 0; i < this.snake.getLength(); i++){
            let position = this.snake.getSegmentPosition(i);
            this.view.fillTile(posiiton.x, position.y, Settings.SNAKE_BODY_COLOR);
        }

        this.view.fillTile(this.board.getFoodPosition().x, this.board.getFoodPosition().y, Settings.FOOD_COLOR);

        this.view.drawText("Score: " + score, "20px Arial", "black", 10, 10); //todo
    }

    gameOver() {
        this.view.drawText(
            "Game over!",
            "60px Arial black",
            "black",
            10,
            10 //todo
        );
        clearInterval(this.gameLoopInterval);
    }

    setDirection(direction) {
        this.snake.setDirection(direction);
    }
}