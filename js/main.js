window.onload = function(){
  var game = new Game('canvas');
  
  var interval = setInterval(game.update.bind(game), 1000/60);
  
}