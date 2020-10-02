var n = 0;
var d = 0;
var slider_n, slider_d;

function setup() {
  createCanvas(400,400);
  slider_n = createSlider(0,10,1,.5);
  slider_d = createSlider(0,10,1,.5);
}

function draw() {
  background(51);
  translate(width/2,height/2);
  n = slider_n.value();
  d = slider_d.value();

  beginShape();
  noFill();
  stroke(255);
  strokeWeight(2);
  // Rotate a (theta) around the full circle
  for (var a = 0; a < (d/n)*TWO_PI; a += 0.01) {
    var r = 100*cos((n/d)*a);
    var x = r*cos(a);
    var y = r*sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
}
