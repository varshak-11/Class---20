var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "blue";
  fixedRect.velocityX = 5;
  movingRect = createSprite(600, 200, 80, 50);
  movingRect.shapeColor = "black";
  movingRect.velocityX = -5;
}

function draw() {
  background(255,255,255);  
  
  
  //movingRect.y = World.mouseY;
  //movingRect.x = World.mouseX;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2)
    {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else {
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "black";
  }

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2) {
      movingRect.velocityX = movingRect.velocityX * (-1)
      fixedRect.velocityX = fixedRect.velocityX * (-1)
    }
  drawSprites();
}