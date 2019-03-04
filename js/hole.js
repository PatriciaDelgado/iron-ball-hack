
function Hole(ctx){
  this.ctx = ctx;
  this.width = 35;
  this.x = 85;
  this.y = 75;
  //this.height = 50;
  this.color = 'black';
  this.good = false;
  this.bad = true;
}
Hole.prototype.draw = function() {
  this.ctx.beginPath();
  this.ctx.fillStyle = "black";
  this.ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
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
  if(this.bad == true  && ball.posX + this.width >= this.posX){
    ball.color = 'blue';
    console.log(ball.color)
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