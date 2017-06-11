var Draw = (function(){
  var ctx;

  //PUBLIC METHODS
  return {
    setContext: function (context) {
      ctx = context;
    },
    line: function (beginning, ending, width, color) {
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(beginning.x, beginning.y);
      ctx.lineWidth = width;
      ctx.lineTo(ending.x, ending.y);
      ctx.stroke();
      ctx.closePath();
      ctx.lineWidth = 1; //set value to default after drawing
    },
    triangle: function () {

    },
    tree: function(startX, startY, height, angle){
      if (height <= 10) {
        return;
      }
      Draw.line(
        {x:0, y:0},
        {x:startX, y:startY - height},
        5,
        'brown',
        angle);
      Draw.tree(0, -height, height/2, -30);
      Draw.tree(0, -height, height/2, 30);
    }
  };
})();