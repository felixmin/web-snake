
    /*******************************************************
    * GAME LOGIC VARIABLES
    *******************************************************/

       
    const Direction = {
        UP: 1,
        RIGHT: 2,
        DOWN: 3,
        LEFT: 4
    };

    var tileSize = 15;
    var nrOfTilesInX = 50;
    var nrOfTilesInY = 30;

    var snakeColor = "red";
    var snakebody = [];
    var snakeX = 2;
    var snakeY = 2;
    var snakeDirection = Direction.RIGHT;
    var bodyDirection = Direction.LEFT;

    var foodColor = "green";
    var foodX = getRandomNumber(0, nrOfTilesInX-1);
    var foodY = getRandomNumber(0, nrOfTilesInY-1);

    var score = 0;


    /*******************************************************
    * CANVAS VARIABLES
    *******************************************************/

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.canvas.width = nrOfTilesInX * tileSize + tileSize;
    ctx.canvas.height = nrOfTilesInY * tileSize + tileSize;


    /*******************************************************
    * GAME LOOP
    *******************************************************/

    function gameLoop() {
        clearCanvas();

        moveSnake();

        checkFoodCollision();
        checkBodyCollision();
        checkWallCollision();


        fillTile(snakeX, snakeY, snakeColor);
        // draw snake
        for(var i = 0 ; i < snakebody.length; i++){
            fillTile(snakebody[i][0], snakebody[i][1], snakeColor);
        }
      

        // draw food
        fillTile(foodX, foodY, foodColor);

        drawText("Score: " + score, "20px Arial", "black", 10, canvas.height - 10);
    }

    var gameLoopInterval = setInterval(gameLoop, 100);


    /*******************************************************
    * GAME LOGIC FUNCTIONS
    *******************************************************/

    function moveSnake() {

        if (snakebody.length != 0){
            snakebody.shift()
            snakebody.push([snakeX,snakeY])
        }

        if (snakeDirection == Direction.UP) {
            snakeY = snakeY - 1;
            bodyDirection = Direction.DOWN
        } else if (snakeDirection == Direction.RIGHT) {
            snakeX = snakeX + 1;
            bodyDirection = Direction.LEFT
        } else if (snakeDirection == Direction.DOWN) {
            snakeY = snakeY + 1;
            bodyDirection = Direction.UP
        } else if (snakeDirection == Direction.LEFT) {
            snakeX = snakeX - 1;
            bodyDirection = Direction.RIGHT
        }


    }

    function checkFoodCollision() {
        if (snakeX == foodX && snakeY == foodY) {
            snakebody.push((snakeX,snakeY))
            score = score + 1;
            generateNewFood();
        }

        snakebody.some( s => {
            if (s[0] == foodX && s[1] == foodY) {
                snakebody.push((snakeX,snakeY))
                score = score + 1;
                generateNewFood();
            }
        })
    }

    function checkBodyCollision() {
        snakebody.some( s => {
            if (s[0] == snakeX && s[1] == snakeY) {
                gameOver();
            }
        })
    }

    function generateNewFood() {
        foodX = getRandomNumber(0, nrOfTilesInX-1);
        foodY = getRandomNumber(0, nrOfTilesInY-1);
        checkFoodCollision();
    }

    function gameOver() {
        drawText(
            "Game over!",
            "60px Arial black",
            "black",
            canvas.width/2 - 200,
            canvas.height/2
        );
        clearInterval(gameLoopInterval);
    }

    function checkWallCollision() {
        // in X direction
        if (snakeX < 0 || snakeX > nrOfTilesInX) {
            gameOver();
        }

        // in Y direction
        if (snakeY < 0 || snakeY > nrOfTilesInY) {
            gameOver();
        }
    }


    /*******************************************************
    * DRAWING FUNCTIONS
    *******************************************************/

    function fillTile(x, y, color) {
        ctx.beginPath();
        ctx.rect(x*tileSize, y*tileSize, tileSize, tileSize);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function drawText(text, font, color, x, y) {
        ctx.beginPath();
        ctx.font = font;
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
        ctx.closePath();
    }


  /*******************************************************
    * USER INTERACTION FUNCTIONS
    *******************************************************/
    document.getElementById("btnLeft").onclick = () => { keyPressed({key: 'ArrowLeft'}) };
    document.getElementById("btnRight").onclick = () => { keyPressed({key: 'ArrowRight'}) };
    document.getElementById("btnDown").onclick = () => { keyPressed({key: 'ArrowDown'}) };
    document.getElementById("btnUp").onclick = () => { keyPressed({key: 'ArrowUp'}) };


    function keyPressed(event) {
        if (event.key == "ArrowUp" && bodyDirection != Direction.UP) {
            snakeDirection = Direction.UP;
        } else if (event.key == "ArrowRight" && bodyDirection != Direction.RIGHT) {
            snakeDirection = Direction.RIGHT;
        } else if (event.key == "ArrowDown" && bodyDirection != Direction.DOWN) {
            snakeDirection = Direction.DOWN;
        } else if (event.key == "ArrowLeft" && bodyDirection != Direction.LEFT) {
            snakeDirection = Direction.LEFT;
        }
    }

    document.addEventListener("keydown", keyPressed);


    /*******************************************************
    * HELPER FUNCTIONS
    *******************************************************/

    function getRandomNumber(start, end) {
        return Math.ceil(Math.random() * (end - start) + start);
    }