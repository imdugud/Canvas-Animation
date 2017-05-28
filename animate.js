window.Animate = (function(){
  var fpsInterval, then, startTime, now, elapsed, frameCount;
  var stopped = false;
  
  var requestAnimFrame = (function(){
    return window.requestAnimationFrame||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
  })();
    //coordinate animation with elapsed time
  var animate = function() {
    // stop
    if (stop) {
      return;
    }
      // request another frame
      requestAnimFrame(animate);
      // calc elapsed time since last loop
      now = Date.now();
      elapsed = now - then;
      // if enough time has elapsed, draw the next frame
      if (elapsed > fpsInterval) {
        // Get ready for next frame by setting then=now, but...
        // Also, adjust for fpsInterval not being multiple of 16.67
        then = now - (elapsed % fpsInterval);

            //draw
            gameInstance.update();
            gameInstance.redraw();

            // TESTING...Report #seconds since start and achieved fps.
            var sinceStart = now - startTime;
            var currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100) / 100;
            console.log("Elapsed time= " + Math.round(sinceStart / 1000 * 100) / 100 + " secs @ " + currentFps + " fps.");
          }
  };

  var startAnimating = function(fps) {
      fpsInterval = 1000/fps;
      then = Date.now();
      startTime = then;
      console.log(startTime);
      animate();
  };
  var canvasSize = {};
  return {
    canvasSize: canvasSize,
    init: function(fps, canvasId){
      canvas = document.getElementById(canvasId);
      context = canvas.getContext("2d");
      canvasSize.w = canvas.width;
      canvasSize.h = canvas.height;
      startAnimating(fps);
    },
    stop: function(){
      stopped = true;
    }
  };
})();
