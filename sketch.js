var hour_1 ,minutes,seconds;
var secondsAngle,minutesAngle,hourAngle;


function setup() {
  createCanvas(800,400);
 

 
  angleMode(DEGREES)
 
}

function draw() {
  background("black"); 
  translate(400,200); 
  hour_1 = hour();
  minutes = minute();
  seconds = second();
  secondsAngle = map(seconds,0,60,0,360);
   hourAngle = map(hour_1%12,0,12,0,360);
   minutesAngle = map(minutes,0,60,0,360)
  
  
  push();
  rotate(secondsAngle)
  stroke("red");
  strokeWeight(8);
  line(0,0,160,10);
  pop();
  
  push();
  rotate(minutesAngle)
  stroke("green");
  strokeWeight(8);
  line(0,0,150,10);
  pop();

  push();
  rotate(hourAngle)
  stroke("blue");
  strokeWeight(8);
  line(0,0,100,10);
  pop();

  
  stroke("red");
  strokeWeight(5)
  noFill();
  arc(0, 0, 350, 350, 0, secondsAngle);

  
  stroke("green");
  strokeWeight(5)
  noFill();
  arc(0, 0, 330, 330, 0, minutesAngle);

   
  stroke("blue");
  strokeWeight(5)
  noFill();
  arc(0, 0, 300, 300, 0, hourAngle);
 

}