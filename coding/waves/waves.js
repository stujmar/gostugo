console.log("Waves");

let width = 800;
let height = 800;
let x = 0;
let y = 0;


function setup() {
  createCanvas(width, height);
}

function draw() {
  fill(0, 0, 0);
  noStroke();
  ellipse(x,(Math.sin(y) * 150)+ 200,5,5);
  console.log(Math.sin(x));
  if (x < width) {
    x+=2;
  } else {
    x = 0;
  }
  y = y + .05;
  
}
