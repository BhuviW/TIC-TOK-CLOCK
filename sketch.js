var hr,min,sec;
var hrAngle,minAngle,secAngle;
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  

  translate(400,200);
  rotate(-60);

  hrAngle = map(hr,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  secAngle = map(sec,0,60,0,360);
  
   hr = hour();
  min = minute();
  sec = second();

 // hr hand
 push();
 rotate(hrAngle);
 stroke(0,0,255);
 strokeWeight(7);
 line(0,0,50,0);
 pop();

  // mins hand
  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();
 
  //sec hand
  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  stroke(255,0,255);
  point(0,0);

//drawing the arcs
strokeWeight(10);
noFill();

//hour
stroke(0,0,255);
arc(0,0,260,260,0,hrAngle);

//minutes
stroke(0,255,0);
arc(0,0,280,280,0,minAngle);

//seconds
stroke(255,0,0);
arc(0,0,300,300,0,secAngle);

  drawSprites();
}