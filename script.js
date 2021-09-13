import UI from './ui/uiAdapter.js';
import Game from './game/main.js';
import DIRECTIONS from './game/directions.js';

const view = new UI(document.getElementById('canvas'));

const game = new Game(view);

document.getElementById("btnLeft").onclick = () => { keyPressed({key: 'ArrowLeft'}) };
document.getElementById("btnRight").onclick = () => { keyPressed({key: 'ArrowRight'}) };
document.getElementById("btnDown").onclick = () => { keyPressed({key: 'ArrowDown'}) };
document.getElementById("btnUp").onclick = () => { keyPressed({key: 'ArrowUp'}) };


function keyPressed(event) {
    if (event.key === "ArrowUp") {
        game.setDirection(DIRECTIONS.UP);
        console.log('HI');
    } else if (event.key === "ArrowRight") {
        game.setDirection(DIRECTIONS.RIGHT);
    } else if (event.key === "ArrowDown") {
        game.setDirection(DIRECTIONS.DOWN);
    } else if (event.key === "ArrowLeft") {
        game.setDirection(DIRECTIONS.LEFT);
    }
}

document.addEventListener("keydown", keyPressed);


game.gameLoop();