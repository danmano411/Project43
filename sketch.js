function setup() {
  createCanvas(400,400);

  angleMode(DEGREES)

}

function draw() {
  background("black");
  translate(200, 200)
  rotate(270)
  noFill();

  var hr = hour();
  var mn = minute();
  var sc = second();
  
  strokeWeight(7)

  var hourAngle = map(hr%12, 0, 12, 0, 360)
  stroke("blue")
  arc(0, 0, 260, 260, 0, hourAngle)

  var minuteAngle = map(mn, 0, 60, 0, 360)
  stroke(38, 245, 34)
  arc(0, 0, 280, 280, 0, minuteAngle)

  var secondAngle = map(sc, 0, 60, 0, 360)
  stroke("red")
  arc(0, 0, 300, 300, 0, secondAngle)
  
  push();
  rotate(secondAngle)
  stroke("red")
  line(0, 0, 100, 0)
  pop();

  push();
  rotate(minuteAngle)
  stroke(38, 245, 34)
  line(0, 0, 75, 0)
  pop();

  push();
  rotate(hourAngle)
  stroke("blue")
  line(0, 0, 50, 0)
  pop();

  fill(255)
  noStroke();
  ellipse(0, 0, 10)
  
}