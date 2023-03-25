let flower1 = {
  //Pink flower with 5 petals
  startX: 115,
  startY: 50,
  size: 0.25,
  petals: 5,
  color: 300,
};

let flower2 = {
  //Blue flower with 7 petals
  startX: 55,
  startY: 100,
  size: 0.2,
  petals: 7,
  color: 200,
};

let flower3 = {
  //White flower with 4 petals
  startX: 30,
  startY: 30,
  size: 0.15,
  petals: 4,
  color: "white",
};

let pattern = {
  //Object to edit pattern spacing
  rows: 4,
  columns: 7,
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
    flower2.x = flower2.startX + (width / pattern.columns * columnsDrawn);
    flower3.x = flower3.startX + (width / pattern.columns * columnsDrawn);
    
    //Draws Rows
    for (let rowsDrawn = 0; rowsDrawn < pattern.rows; rowsDrawn++) {
      flower1.y = flower1.startY + (height / pattern.rows * rowsDrawn);
      flower2.y = flower2.startY + (height / pattern.rows * rowsDrawn);
      flower3.y = flower3.startY + (height / pattern.rows * rowsDrawn);
      
      drawFlower(flower1);
      drawFlower(flower2);
      drawFlower(flower3);
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
