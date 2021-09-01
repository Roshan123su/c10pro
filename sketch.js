var ship,shipImage;
var sea,seaImg

function preload(){
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png",);
seaImg    = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200);
  sea.addImage(seaImg);
  sea.scale = 0.4

  ship = createSprite(200,220);
  ship.addAnimation("shipsail",shipImage);
  ship.scale = 0.2;
}

function draw() {
  background("blue");
  
  sea.velocityX = -2;
  if(sea.x < 0){
     sea.x = sea.width/2;

    
  }
  drawSprites()
}