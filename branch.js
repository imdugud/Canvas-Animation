'use strict';
var Branch = function(){
	var distanceX = 10;
	var beginnig = {x:0, y:0};
	var firstHeight = 300;
	var number = 1;
	var branchCount = 2;
	
	this.drawBranch = function(startX, startY, height, angle){
		height = firstHeight / Math.pow(2, n);
		var firstCoord = {x: beginnig.x, y: beginnig.y };
		var secondCoord = {x: (beginnig.x), y: (beginnig.y + height)};
		Draw.line(firstCoord, secondCoord, 4, 'red');
	};

	var readySets = function(n, x){

		drawBranch(n);
	};

	var makeTree = function(number){
		var h = firstHeight/Math.pow(branchCount, number);
		if (h <= 1) {
			return;
		}
		Draw.line({x:0, y:0},{x:(number*5), y:h},5,'brown');
		number++;
		console.log("height:", h);
		console.log("number:", number);
		// This is it! Recursion!!
  		return makeTree(number);
	}

	this.init = function(){
		makeTree(1);
	}
}