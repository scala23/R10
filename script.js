let X0 = [];
let Y0 = [];
let H0 = [];
let L0 = [];
let X1 = [];
let Y1 = [];
let H1 = [];
let L1 = [];
let X2 = [];
let Y2 = [];
let H2 = [];
let L2 = [];
let squareColors = [];
let squarePosition = [];
let numberOfSquares = 1000;


function setup() {
  createCanvas(windowWidth-20, windowHeight-20);
background(240, 240, 240);
fill(237,34,93);
noStroke();
beginShape();
vertex(0, 100);
vertex(100, 0);
vertex(0, 200);
vertex(200, 0);
endShape();
fill('blue');
rect(200, 50, 55, 55); 
translate(70, 100);
rect(200, 50, 55, 55); 
translate(50, 140);
rect(200, 50, 55, 55); 
ellipse(0, 50, 100, 100); // Left circle
push(); // Start a new drawing state
strokeWeight(10);
fill('purple');
ellipse(350, 50, 100, 100); // Left-middle circle
push(); // Start another new drawing state
stroke(0, 102, 153);
ellipse(340,-140, 100, 100); // Right-middle circle
pop(); // Restore previous state
pop(); // Restore original state
ellipse(100, 50, 100, 100); // Right circle
  let dx = width/numberOfSquares;
  let tx = random(10000);
  for( let i = 0; i < numberOfSquares; i++ ) {
    X0[i] = noise(squarePosition[i]);
    Y0[i] = random(windowHeight);
    H0[i] = 5;
    L0[i] = 5;
    X1[i] = random(windowWidth);
    Y1[i] = random(windowHeight);
    H1[i] = 5;
    L1[i] = 5;
    X2[i] = random(windowWidth);
    Y2[i] = random(windowHeight);
    H2[i] = 5;
    L2[i] = 5;
    tx += random(10);
    squareColors[i] = {
      tr: random(10000),
      tg: random(10000),
      tb: random(10000),
      ta: random(10000),
    };
    t = 0;
  }
}

function draw() {
  noStroke();
  for( let i = 0; i < numberOfSquares; i++ ) {
    let r = 255 * noise(squareColors[i].tr); 
    let g = 255 * noise(squareColors[i].tg);
    let b = 255 * noise(squareColors[i].tb);
    let a = 300 * noise(squareColors[i].ta);
    fill(r,g,b,a)
    // stroke('blue')
    rect(X0[i], Y0[i], H0[i], L0[i]);
    rect(X1[i], Y1[i], H1[i], L1[i]);
    rect(X2[i], Y2[i], H2[i], L2[i]);
    squareColors[i].tr += 0.31;
    squareColors[i].tg += 0.31;
    squareColors[i].tb += 0.31;
    squareColors[i].ta += 0.31;
    noStroke();
  }
}

function doubleClicked() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}

