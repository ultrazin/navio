var sea, seaImg;
var ship, shipImg1;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png", "ship-2.png")


}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,200)
  sea.addImage(seaImg)
  sea.velocityX = -2;

  ship = createSprite(200,300)
  ship.addAnimation("movingShip", shipImg1)
  ship.scale = 0.25;
}

function draw() {
  background("blue");
   
    
 if(sea.x < 0){
   sea.x= sea.width / 2;
 }
 drawSprites();
}