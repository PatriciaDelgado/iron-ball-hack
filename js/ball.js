function Ball(ctx, x, y){
  this.ctx = ctx;
  this.width = 25;
  this.posX = x;
  this.posY = y;
  this.color = 'orange';
  
}
Ball.prototype.draw = function() {
  this.ctx.beginPath();
  this.ctx.fillStyle = this.color;
  this.ctx.arc(this.posX, this.posY, this.width, 0, 2 * Math.PI);
  this.ctx.fill();
}
Ball.prototype.move = function() {
  
  function moveLeft() {
    this.posX -= 1;
    console.log(this.posX);
  }
  function moveRight() {
    this.posX += 1;
  }
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        moveLeft();
        console.log('moverse a la izquierda');
        break;
      case 39:
        moveRight();
        console.log('moverse a la derecha');
        break;
    }
  }
}


