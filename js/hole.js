
function Hole(ctx, x, y){
  this.ctx = ctx;
  this.radio = 35;
  this.x = Math.floor(Math.random() * (this.radio * 2));
  this.y = Math.floor(Math.random() * (this.radio * 2))
  //this.y = this.radio*2;
  this.color = 'black';
  this.good = true;
  this.bad = false;
  this.area = (this.radio * this.radio * Math.PI);
}
Hole.prototype.draw = function() {
  this.ctx.beginPath();
  this.ctx.fillStyle = "black";
  this.ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
  //console.log(this.area);
  if(this.bad == true) {
    this.ctx.strokeStyle = "red";
    this.ctx.stroke();
    this.ctx.lineWidth = 15;
    this.ctx.fill();
  }
  if(this.good == true) {
    this.ctx.strokeStyle = "green";
    this.ctx.stroke();
    this.ctx.lineWidth = 15;
    this.ctx.fill();
  }
}

//collisions

Hole.prototype.collision = function(ball) {
  if(this.bad == true &&
    ball.posX  <= this.x + this.radio &&
    ball.posY <= this.y + this.radio || ball.posX  <= this.x - this.radio &&
    ball.posY <= this.y + this.radio ){
    ball.color = 'red';
    ball.posY = this.y;
    ball.posX = this.x;
    console.log( 'PERDISTE 1 PUNTO');
  } else if (this.good == true &&
    ball.posX  <= this.x + this.radio &&
    ball.posY <= this.y + this.radio || ball.posX  <= this.x - this.radio &&
    ball.posY <= this.y + this.radio){
      ball.color = 'green';
      ball.posY = this.y;
      ball.posX = this.x;
      console.log( 'GANASTE 1 PUNTO');
  }
 /*  if(
    player.x + player.width >= this.x && 
    this.x + this.width >= player.x && 
    player.y + player.height >= this.y && 
    this.y + this.height >= player.y
    ) {
      player.x = this.x + this.width
      player.color = this.color
  } */
}