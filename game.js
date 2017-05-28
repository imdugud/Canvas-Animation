
//find random
var Tile = function(x, y){
  this.x = x;
  this.y = y;
  this.w = 100;
  this.h = 100;
  this.xGrid = 0;
  this.yGrid = 0;
};
Tile.prototype.draw = function(context){

};

var Game = function(){
  this.arr = [];
  for (var i = 0; i < 6; i++) {
    this.arr[i] = [];
  }

  for (var i = 0; i < 6; i++) {

    for (var j = 0; j < 6; j++) {
      this.arr[i][j] = UTILS.randomIntFromInterval(0, 3);
    }
  }
};

Game.prototype.redraw = function() {
  // body...
};

Game.prototype.update = function() {
  // body...
};