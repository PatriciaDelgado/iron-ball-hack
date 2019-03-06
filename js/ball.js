function Ball(ctx){
  this.ctx = ctx;
  this.radio = 25;
  this.posX = 300;
  this.posY = 580;
  this.isMovingRight = false;
  this.isMovingLeft = false;
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
    }
  }.bind(this)
  document.onkeyup = function(e) {
    this.isMovingRight = false;
    this.isMovingLeft = false;
  }.bind(this)

  if(this.isMovingRight === true && this.posX + this.radio <= canvas.width)this.posX += 5;
  if(this.isMovingLeft === true && this.posX > 0)this.posX -= 5;
  //function startGame() {}
  this.posY -= this.velocityY;
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


