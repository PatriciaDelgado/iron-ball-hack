function Ball(ctx, score, x, y, img){
  this.ctx = ctx;
  this.radio = 20;
  this.posX = x;
  this.posY = y;
  this.isMovingRight = false;
  this.isMovingLeft = false;
  this.startMoveTop = false;
  this.velocityY = 2;
  this.color = 'orange';
  this.area = (this.radio * this.radio * Math.PI);
  this.score = 0;
  this.et = new Image();
  this.et.src = img
}
Ball.prototype.move = function(e) {
  document.onkeyup = function(e) {
    this.isMovingRight = false;
    this.isMovingLeft = false;
    //this.startMoveTop = false;
  }.bind(this)

  if(this.isMovingRight === true && this.posX + this.radio <= canvas.width)this.posX += 2;
  if(this.isMovingLeft === true && this.posX - this.radio > 0)this.posX -= 2;
  //if(this.startMoveTop === true && this.posY - this.radio > 0)this.posY -= 5;
  if(this.startMoveTop === true)this.posY -= this.velocityY  ;
  //gameover function
  if(this.posY <= (0 - this.radio)){
    var element = document.getElementById('GameOver');
    element.classList.add("GameOver__active");
  }
}
Ball.prototype.draw = function() {
  this.ctx.drawImage(this.et, this.posX - this.radio, this.posY - this.radio, this.radio * 2, this.radio * 2);
}



