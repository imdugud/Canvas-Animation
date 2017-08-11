'use strict';
window.Animate = (function(){
  var then, startTime, now, elapsed, frameCount, delta, ticks;
  var stopped = false;
  var gameCanvas = null;
  var gameContext = null;
  var windowFocusControl = false;
  var update = null;
  
  var clearCanvas = function (width, height) {
    gameContext.clearRect(0, 0, width, height);
  };

  // A cross-browser requestAnimationFrame
    var requestAnimFrame = (function () {
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        };
    })();
  
  //coordinate animation with elapsed time
  var render = function() {
    if (stopped) {
      return;
    }

    requestAnimFrame(render);

    if (!window.blurred) {//this provides stop animation, if window is inactive
      //draw and update again and again
      update();

      now = Date.now();
      delta = (now - then) / 1000; // Converts to seconds (optional)
      then = now;
      ticks = 1 / delta;
    }
  };

  return {
    init: function(animationParams){
      gameCanvas = document.getElementById(animationParams.canvasId);
      gameContext = gameCanvas.getContext("2d");
      gameCanvas.width = animationParams.canvasSize.w;
      gameCanvas.height = animationParams.canvasSize.h;
      update = function(){
        clearCanvas(gameCanvas.width, gameCanvas.height);
        animationParams.update();
      };

      Draw.setContext(gameContext);
      if(animationParams.windowFocusControl){
        UTILS.setWindowBlur();
      }
    },
    startAnimation: function(){
      then = 0;
      delta = 0;
      ticks = 0;
      render();
    },
    stopAnimation: function(){
      stopped = true;
    },
    getContext: function(){
      return gameContext;
    }
  };
})();
