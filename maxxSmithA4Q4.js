let flower1 = {
  //Pink flower with 5 petals
  startX: 30,
  startY: 30,
  size: 0.25,
  petals: 5,
  color: 300,
};

petalsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pattern = {
  //Object to edit pattern spacing
  rows: 8,
  columns: 10,
};

function setup() {
  createCanvas(960, 540);
  angleMode(DEGREES);
  colorMode(HSL);
  noLoop();
}

function draw() {
  background("midnightblue");

  //Draws Columns
  for (let columnsDrawn = 0; columnsDrawn < pattern.columns; columnsDrawn++) {
    flower1.x = flower1.startX + (width / pattern.columns * columnsDrawn);
    
    //Draws Rows
    for (let rowsDrawn = 0; rowsDrawn < pattern.rows; rowsDrawn++) {
      flower1.y = flower1.startY + (height / pattern.rows * rowsDrawn);
      
      flower1.petals = petalsArray[rowsDrawn];
      drawFlower(flower1);
    }
    
  }
}

function drawFlower(flower) {
  push();
  //Calls flower in location and size of choosing
  translate(flower.x, flower.y);
  scale(flower.size);

  if (flower.color == "white") {
    //Sets color to white
    fill("white");
  } else if (flower.color == "black") {
    //Sets color to black
    fill("black");
    background("white");
  } else {
    //Sets color to full saturation of degree called in color
    fill(flower.color, 100, 50);
  }

  push();
  noStroke();

  //Petals
  for (let i = 0; i < flower.petals; i++) {
    rect(0, 0, 100, 100, 50); //Looked better than ellipse()
    rotate(360 / flower.petals); //Changes petal rotation based on # of petals
  }

  //Flower Bulb
  if (flower.color >= 50 && flower.color <= 65) {
    //If petals are yellow, bulb is brown
    fill("sienna");
  } else {
    fill("yellow"); //All other colors, bulb is set to yellow
  }
  ellipse(0, 0, 100); //FLower bulb
  pop();
  pop();
}
