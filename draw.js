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

    }
  };
})();