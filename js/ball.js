function Ball(ctx){
  this.ctx = ctx;
  this.radio = 15;
  this.posX = 300;
  this.posY = 580;
  this.isMovingRight = false;
  this.isMovingLeft = false;
  this.startMoveTop = false;
  this.velocityY = 1;
  this.color = 'orange';
  this.area = (this.radio * this.radio * Math.PI);
}
Ball.prototype.move = function() {
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        this.isMovingLeft = true;
        break;
      case 39:
        this.isMovingRight = true;
        break;
      case 38:
      this.startMoveTop = true;
        break;
    }
  }.bind(this)
  document.onkeyup = function(e) {
    this.isMovingRight = false;
    this.isMovingLeft = false;
  }.bind(this)

  if(this.isMovingRight === true && this.posX + this.radio <= canvas.width)this.posX += 5;
  if(this.isMovingLeft === true && this.posX - this.radio > 0)this.posX -= 5;
  if(this.startMoveTop === true)this.posY -= this.velocityY;
  //function startGame() {}
  
  //gameover function
  if(this.posY <= (0 + this.radio)){
    var element = document.getElementById('GameOver');
    element.classList.add("GameOver__active");
  }
}
Ball.prototype.draw = function() {
  this.ctx.beginPath();
  this.ctx.fillStyle = this.color;
  this.ctx.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
  this.ctx.fill();
  this.ctx.closePath();
  
}
//puntuación de la bola
function score (objectBall){
  if (
    objectBall.y <= 260 &&
    objectBall.y >= 240 &&
    objectBall.x + objectBall.radius <= 125 &&
    objectBall.x - objectBall.radius >= 0
    ){
      Score++;
      objectBall.x = 600;
      objectBall.y = 200;
      objectBall.vx = 9;
      objectBall.vy = 6;
      ctx.font = "16px Arial";
      ctx.fillStyle = "#0095DD";
      ctx.fillText("Score: "+Score, 8, 20);
  }
}


