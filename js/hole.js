
function Hole(ctx, x, y, good, bad){
  this.ctx = ctx;
  this.radio = 20;
  this.x = (Math.floor(Math.random() * (600)) + this.radio);
  this.y = Math.floor(Math.random() * (450));
  this.color = 'black';
  this.good;
  this.bad;
  this.area = (this.radio * this.radio * Math.PI);
  //this.score = 0;
}
Hole.prototype.draw = function() {
  this.ctx.beginPath();
  this.ctx.fillStyle = "black";
  this.ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
  if(this.bad == true) {
    var asteroid = new Image();
    asteroid.src = './img/asteroide-black.png';
    this.ctx.drawImage(asteroid, this.x - this.radio - 5, this.y - this.radio - 5, this.radio * 2.5, this.radio * 2.5);
  }
  if(this.good == true) {
    var et = new Image();
    et.src = './img/hole-green.png';
    this.ctx.drawImage(et, this.x - this.radio - 5, this.y - this.radio - 5, this.radio * 2.5, this.radio * 2.5);
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
    //ball.et.src = './img/asteroide.jpg';
    var element = document.getElementById('GameOver');
    element.classList.add("GameOver__active");
    
  } else if (this.good == true &&
    ball.posX - ball.radio / 2 <= this.x + this.radio &&
    ball.posX + ball.radio / 2 >= this.x - this.radio &&
    ball.posY + ball.radio / 2 >= this.y - this.radio &&
    ball.posY - ball.radio / 2 <= this.y + this.radio){
      ball.color = 'green';
      ball.posY = this.y;
      ball.posX = this.x;
      ball.posX = 300;
      ball.posY = 580;
      ball.isMovingRight = false;
      ball.isMovingLeft = false;
      ball.startMoveTop = false;
      ball.score = ball.score + 1;
      var audio = new Audio('./sounds/applause.mp3');
      audio.play();
  }
}
