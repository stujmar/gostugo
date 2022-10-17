let myLine;
let width = 800;
let height = 800;
let x = 0;
let y = 0;
let velocity = 3;

class Line {
    constructor(x1, y1, x2, y2) {
        this.start = {x: x1, y: y1};
        this.end = {x: x2, y: y2};
    }
    draw() {
        stroke(0,200,200);
        strokeWeight(1);
        if (this.pointsAreSequential()) {
        line(this.start.x, this.start.y, this.end.x, this.end.y);
        }
    }
    update(_x,_y) {
      this.start = this.end;
      this.end = {x: _x, y: _y};
    }
    pointsAreSequential() {
      return abs(this.start.x - this.end.x) <= (velocity) && abs(this.start.y - this.end.y) < 50;
    }
}

// Create canvas on webpage.
function setup() {
  frameRate(120);
  myLine = new Line(0,200,0,200);
  let myCanvas = createCanvas(width, height);
  myCanvas.parent("mountPoint");
  
}

// Loop to draw dots.
function draw() {
  myLine.update(x,(Math.sin(y) * 150)+ 550);
  if (x < width) {
    myLine.draw();
   drawRect(x, y);
    console.log();
    push();
    noStroke();
    fill(0, 0, 0);
    ellipse(x,(Math.sin(y) * 150)+ 200,4,4);
    pop();
    x+=velocity;
  } else {
    x = 0; 
  }
  y = y + .05;
}


function drawRect(x, y) {
  push();
  noStroke();
  fill(Math.round(rangeMap(Math.sin(y), -1, 1, 0, 255)));
  rect(x, height - 35, 5, 25);
  pop();
}

function rangeMap(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

// console.log(rangeMap(25, -1, 1, 0, 255));