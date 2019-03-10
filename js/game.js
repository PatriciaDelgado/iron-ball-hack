
function Game(){
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
  canvas.width = 600;
  canvas.height = 650;
  this.background = new Background(this.ctx);
  //this.hole = new Hole(this.ctx, this.x, this.y);
  this.ball = new Ball(this.ctx);

  /* generador de agujeros random */
  this.myHoles = [];
  for (i = 0; i < 26; i++) {
    this.myHoles.push(new Hole(this.ctx, this.x, this.y, this.good));
  }
  this.myHoles[0].x = 40;
  this.myHoles[0].y = 50;
  this.myHoles[0].bad = true;
  this.myHoles[1].x = 140;
  this.myHoles[1].y = 50;
  this.myHoles[1].bad = true;
  this.myHoles[2].x = 240;
  this.myHoles[2].y = 50;
  this.myHoles[2].bad = true;
  this.myHoles[3].x = 340;
  this.myHoles[3].y = 50;
  this.myHoles[3].bad = true;
  this.myHoles[4].x = 440;
  this.myHoles[4].y = 50;
  this.myHoles[4].good = true;
  this.myHoles[5].x = 540;
  this.myHoles[5].y = 50;
  this.myHoles[5].bad = true;
  this.myHoles[6].x = 90;
  this.myHoles[6].y = 130;
  this.myHoles[6].bad = true;
  this.myHoles[7].x = 190;
  this.myHoles[7].y = 130;
  this.myHoles[7].bad = true;
  this.myHoles[8].x = 290;
  this.myHoles[8].y = 130;
  this.myHoles[8].good = true;
  this.myHoles[9].x = 390;
  this.myHoles[9].y = 130;
  this.myHoles[9].bad = true;
  this.myHoles[10].x = 490;
  this.myHoles[10].y = 130;
  this.myHoles[10].bad = true;
  this.myHoles[11].x = 40;
  this.myHoles[11].y = 210;
  this.myHoles[11].bad = true;
  this.myHoles[12].x = 140;
  this.myHoles[12].y = 210;
  this.myHoles[12].bad = true;
  this.myHoles[13].x = 240;
  this.myHoles[13].y = 210;
  this.myHoles[13].bad = true;
  this.myHoles[14].x = 340;
  this.myHoles[14].y = 210;
  this.myHoles[14].bad = true;
  this.myHoles[15].x = 440;
  this.myHoles[15].y = 210;
  this.myHoles[15].bad = true;
  this.myHoles[16].x = 540;
  this.myHoles[16].y = 210;
  this.myHoles[16].bad = true;
  this.myHoles[17].x = 90;
  this.myHoles[17].y = 310;
  this.myHoles[17].bad = true;
  this.myHoles[18].x = 190;
  this.myHoles[18].y = 310;
  this.myHoles[18].bad = true;
  this.myHoles[19].x = 290;
  this.myHoles[19].y = 310;
  this.myHoles[19].good = true;
  this.myHoles[20].x = 390;
  this.myHoles[20].y = 310;
  this.myHoles[20].bad = true;
  this.myHoles[21].x = 490;
  this.myHoles[21].y = 310;
  this.myHoles[21].bad = true;
  this.myHoles[22].x = 140;
  this.myHoles[22].y = 410;
  this.myHoles[22].bad = true;
  this.myHoles[23].x = 240;
  this.myHoles[23].y = 410;
  this.myHoles[23].bad = true;
  this.myHoles[24].x = 340;
  this.myHoles[24].y = 410;
  this.myHoles[24].bad = true;
  this.myHoles[25].x = 440;
  this.myHoles[25].y = 410;
  this.myHoles[25].bad = true;
  console.log('esto es ' + this.myHoles[0].x) 
  console.log(this.myHoles) 

}


Game.prototype.update = function() {
  this.background.draw();
  //this.hole.draw();
  this.myHoles.forEach(function(obstacle) {
    obstacle.draw();
    obstacle.collision(this.ball);
  }.bind(this));
  this.ball.draw();
  this.ball.move();
  score(this.ball);
  
  //this.hole.collision(this.ball);
}

