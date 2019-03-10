function Hole(ctx, x, y, good, bad){
  this.ctx = ctx;
  this.radio = 20;
  this.x = (Math.floor(Math.random() * (600)) + this.radio);
  this.y = Math.floor(Math.random() * (450))
  //this.y = this.radio*2;
  this.color = 'black';
  this.good;
  this.bad;
  this.area = (this.radio * this.radio * Math.PI);
  console.log(this.x);
}
Hole.prototype.draw = function() {
  this.ctx.beginPath();
  this.ctx.fillStyle = "black";
  this.ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
  //console.log(this.area);
  if(this.bad == true) {
    this.ctx.strokeStyle = "red";
    this.ctx.stroke();
    this.ctx.lineWidth = 8;
    this.ctx.fill();
  }
  if(this.good == true) {
    this.ctx.strokeStyle = "green";
    this.ctx.stroke();
    this.ctx.lineWidth = 8;
    this.ctx.fill();
  }
}

//collisions

Hole.prototype.collision = function(ball) {
  if(this.bad == true &&
    ball.posX - ball.radio / 2 <= this.x + this.radio &&
    ball.posX + ball.radio / 2 >= this.x - this.radio &&
    ball.posY + ball.radio / 2 >= this.y - this.radio &&
    ball.posY - ball.radio / 2 <= this.y + this.radio ){
    ball.color = 'red';
    ball.posY = this.y;
    ball.posX = this.x;
    
  
    var element = document.getElementById('GameOver');
    element.classList.add("GameOver__active");
    console.log( 'PERDISTE 1 PUNTO');
    document.getElementById('ScoreText').innerHTML = '1';
    
  } else if (this.good == true &&
    ball.posX - ball.radio / 2 <= this.x + this.radio &&
    ball.posX + ball.radio / 2 >= this.x - this.radio &&
    ball.posY + ball.radio / 2 >= this.y - this.radio &&
    ball.posY - ball.radio / 2 <= this.y + this.radio){
      ball.color = 'green';
      ball.posY = this.y;
      ball.posX = this.x;
      console.log( 'GANASTE 1 PUNTO');
  }
}