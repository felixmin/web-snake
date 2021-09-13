




function checkBodyCollision() {
    snakebody.some( s => {
        if (s[0] == snakeX && s[1] == snakeY) {
            gameOver();
        }
    })
}

function checkWallCollision() {

}