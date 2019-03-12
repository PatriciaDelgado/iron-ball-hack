window.onload = function(){
  document.getElementById("startButton").onclick = function() {
    var gameBg = document.getElementById("myGameBg");
    gameBg.classList.remove("hide");
  
    var gameStartBg = document.getElementById("GameStartBg");
    gameStartBg.classList.add("hide");
    startGame();
  };
  
  function startGame() {
    var game = new Game('canvas');
    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37:
          game.ball.isMovingLeft = true;
          game.ball.isMovingRight = false;
          game.ball.startMoveTop = true;
          break;
        case 39:
          game.ball.isMovingRight = true;
          game.ball.isMovingLeft = false;
          game.ball.startMoveTop = true;
          break;
        case 38:
          game.ball.startMoveTop = true;
          break;
        case 68:
          game.ball2.isMovingRight = true;
          game.ball2.isMovingLeft = false;
          game.ball2.startMoveTop = true;
          break
        case 65:
          game.ball2.isMovingLeft = true;
          game.ball2.isMovingRight = false;
          game.ball2.startMoveTop = true;
          break
        case 87:
          game.ball2.startMoveTop = true;
          break
      }
    };

    gameInterval = setInterval(game.update.bind(game), 1000/60);
  }
}

