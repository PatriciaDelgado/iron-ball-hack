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
    gameInterval = setInterval(game.update.bind(game), 1000/60);
  }
}
