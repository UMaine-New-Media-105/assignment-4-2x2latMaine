let flower = { //Object to edit flower size
  x: 0,
  y: 0,
  size: 100,
  roundness: 50
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  colorMode(HSL)
  noLoop();
}

function draw() {
  background(0);

  drawFlower(width / 2, height / 2, 1, 5, 0);
}

function drawFlower(x, y, size, petals, color) {
  push();
  //Calls flower in location and size of choosing
  translate(x, y);
  scale(size);
  
  if (color == "white"){ //Sets color to white
    fill('white');
  } else if (color == "black"){ //Sets color to black
    fill('black');
    background("white");
  } else { //Sets color to full saturation of degree called in color
    fill(color, 100, 50);
  }

  push();
  noStroke();
  
  //Petals
  for (let i = 0; i < petals; i++) {
    rect(flower.x, flower.y, flower.size, flower.size, flower.roundness); //Looked better than ellipse()
    rotate(360 / petals); //Changes petal rotation based on # of petals
  }
  
  //Flower Bulb
  if (color >= 50 && color <= 65){ //If petals are yellow, bulb is brown
    fill('sienna');
  } else{
    fill('yellow'); //All other colors, bulb is set to yellow
  }
  ellipse(flower.x, flower.y, flower.size) //FLower bulb
  pop();
  pop();
}
