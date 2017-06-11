UTILS = {
	randomIntFromInterval: function(min,max){
    	return Math.floor(Math.random()*(max-min+1)+min);
    },
    setWindowBlur: function(){
	    window.onblur = function () {
	    	window.blurred = true;
	    };
	    window.onfocus = function () {
	    	window.blurred = false;
	    };  
    },
    factorial: function (n){
  		if (n === 0) {
    		return 1;
  		}
  
  	// This is it! Recursion!!
  		return n * UTILS.factorial(n - 1);
    }
};