

function Game(){
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
  canvas.width = 600;
  canvas.height = 650;
  this.background = new Background(this.ctx);
  this.hole = new Hole(this.ctx);
  this.ball = new Ball(this.ctx, 300, 580);
}
/* var obstacles = [];

  for (i = 0; i < 10; i++) {
    obstacles.push(this.hole)
  }  */
  //mover a los lados la bola

Game.prototype.update = function() {
  this.background.draw()
  this.hole.draw();
  this.ball.draw();
  this.ball.move();
}
