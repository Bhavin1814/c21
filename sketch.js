var fixedRect, movingRect;
var one;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  one = createSprite(400, 400,80,30);
  one.shapeColor = "green";
  one.debug = true;
}

function draw() {
  background(100,50,30);  
  bounceOff(movingRect,fixedRect);
  if (isTouching(movingRect,one)) {
    one.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else{
    one.shapeColor = "green";
    movingRect.shapeColor = "green"; 
  }
  drawSprites();
}
