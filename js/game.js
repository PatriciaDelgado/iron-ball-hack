
function Game(){
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
  canvas.width = 600;
  canvas.height = 650;
  this.background = new Background(this.ctx);
  //this.hole = new Hole(this.ctx, this.x, this.y);
  this.ball = new Ball(this.ctx);

  /* generador de agujeros random */
  this.myHoles = [];
  for (i = 0; i < 10; i++) {
    this.myHoles.push(new Hole(this.ctx, this.x, this.y));
  }
  console.log(this.myHoles) 

}


Game.prototype.update = function() {
  this.background.draw();
  //this.hole.draw();
  this.myHoles.forEach(function(obstacle) {
    obstacle.draw();
    obstacle.collision(this.ball);
  }.bind(this));
  this.ball.draw();
  this.ball.move();
  
  //this.hole.collision(this.ball);
}

