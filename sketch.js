
function preload(){
  seaImg = loadImage("sea.png");
  ship-1Img = loadAnimation("ship-1.png");
  ship-2Img = loadAnimation("ship-2.png");
  ship-3Img = loadAnimation("ship-3.png");
  ship-4Img = loadAnimation("ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea.addimage(seaImg);
//code to reset the background
if(sea.x < 0){
  sea.x = sea.width/2;
}

function draw() {
  background("blue");
  drawSprites ()
 
}