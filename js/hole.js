
function Hole(ctx){
  this.ctx = ctx;
  this.width = 50;
  this.height = 50;
  this.color = 'black';
  
}
Hole.prototype.draw = function() {
  this.ctx.beginPath();
  this.ctx.fillStyle = "black";
  this.ctx.arc(80, 75, 35, 0, 2 * Math.PI);
  this.ctx.strokeStyle = "grey";
  this.ctx.stroke();
  this.ctx.lineWidth = 15;
  this.ctx.fill();
}