

function Game(){
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
  canvas.width = 600;
  canvas.height = 650;
  this.background = new Background(this.ctx);
  this.hole = new Hole(this.ctx);
}

Game.prototype.update = function() {
  this.background.draw()
  this.hole.draw()
}