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
    }
};