console.log("Waves");
class Line {
    constructor(x1, y1, x2, y2) {
        this.start = {x: x1, y: y1};
        this.end = {x: x2, y: y2};
    }
    draw() {

        stroke(255,0,0);
        strokeWeight(4);
        if(abs(this.start.x - this.end.x) < 3 && abs(this.start.y - this.end.y) < 50) {
        line(this.start.x, this.start.y, this.end.x, this.end.y);
        }
    }
    update(_x,_y) {
      this.start = this.end;
      this.end = createVector(_x,_y);
}
}

let myLine;
let width = 800;
let height = 800;
let x = 0;
let y = 0;

// Create canvas on webpage.
function setup() {
  myLine = new Line(0,200,0,200);
  createCanvas(width, height);
}

// Loop to draw dots.
function draw() {
  myLine.update(x,(Math.sin(y) * 150)+ 200);
  if (x < width) {
    myLine.draw();
    // noStroke();
    // fill(0, 0, 0);
    // ellipse(x,(Math.sin(y) * 150)+ 200,6,6);
    x+=2;
  } else {
    x = 0; 
  }
  y = y + .05;
}
