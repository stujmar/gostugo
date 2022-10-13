console.log("Waves");

// Establish variables.
let width = 800;
let height = 800;
let x = 0;
let y = 0;

// Create canvas on webpage.
function setup() {
  createCanvas(width, height);
}

// Loop to draw dots.
function draw() {
  fill(0, 0, 0); // Circle dots are black.
  noStroke(); // With no border.
  ellipse(x,(Math.sin(y) * 150)+ 200,5,5); // Draw circle
  if (x < width) { // If it has not reached the edge of the canvas ...
    x += 2; // Progress it right by 2px
  } else {
    x = 0; // If it has reached the right edge reset the x to zero.
  }
  y += .05; // Rate to progress the y value per frame.
  
}
