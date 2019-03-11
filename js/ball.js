function Ball(ctx){
  this.ctx = ctx;
  this.radio = 20;
  this.posX = 300;
  this.posY = 580;
  this.isMovingRight = false;
  this.isMovingLeft = false;
  this.startMoveTop = false;
  this.velocityY = 2;
  this.color = 'orange';
  this.area = (this.radio * this.radio * Math.PI);
  this.score = 0;
  this.et = new Image();
}
Ball.prototype.move = function() {
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        this.isMovingLeft = true;
        this.startMoveTop = true;
        break;
      case 39:
        this.isMovingRight = true;
        this.startMoveTop = true;
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
  //gameover function
  if(this.posY <= (0 - this.radio)){
    var element = document.getElementById('GameOver');
    element.classList.add("GameOver__active");
  }
}
Ball.prototype.draw = function() {
  /* this.ctx.beginPath();
  this.ctx.fillStyle = this.color;
  this.ctx.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
  this.ctx.fill();
  this.ctx.closePath(); */
  //var et = new Image();
  this.et.src = './img/ovni1.png';
  this.ctx.drawImage(this.et, this.posX - this.radio, this.posY - this.radio, this.radio * 2, this.radio * 2);
}



