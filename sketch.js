function semicircle(color1, color2, x, y, radius, angle) {
	
	fill(color1);
	translate(x, y);
	arc(0 ,0, radius * 2, radius * 2, 0 + angle, 180 + angle );
	
	fill(color2);
	arc(0,0, radius * 2, radius * 2, 180 + angle, 0 + angle );
	translate(-x, -y);
}

function randomColor() {
 	var hue = 360 * Math.random();
	return color(hue, 70, 70, 1);
}

function setup() {
	//Basic setup
	noLoop();
	angleMode(DEGREES);
	createCanvas(960, 960);
	background(50);
	colorMode(HSL);	
	noStroke();
	translate(50, 50);
	for( var i = 0; i < 10; i ++) {
		for( var j = 0; j < 10; j ++) {
			semicircle(randomColor(), randomColor(), 50 + j * 60, 50 + i * 60, 25, 3.6 * (10 * i + j))	
		}				
	}
}

