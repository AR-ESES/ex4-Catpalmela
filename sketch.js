let espLarg = 15;
let espAltura = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(160);
  stroke(255);
  strokeWeight(2);
  noFill();
  background(0);
}

function draw() {
  
	for (let i = 1; i < espLarg; i++) {
	  for (let j = 1; j < espAltura; j++) {
		push();
		translate(i * width / espLarg, j * height / espAltura)
		translate(-55,-45)
		scale(0.08);
		noStroke();



		noFill();
		stroke(50,255);
		circle(width/2,height /2,height/3);
		circle(width/2-height/3/4, height/2-height/18, height/12);
		circle(width/2+height/3/4, height/2-height/18, height/12);
		ellipse(750,670, 200, 350);
		ellipse(450,600,420,52)
		ellipse(1040,600,400,52)
	 
	  pop();
    }
  }
}