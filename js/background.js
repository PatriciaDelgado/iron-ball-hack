
function Background(ctx) {
  this.ctx = ctx;
  this.img = new Image();
  this.img.src = './img/space.jpg';
}

Background.prototype.draw = function() {
  this.ctx.drawImage(this.img, 0, 0, 600, 650);
}