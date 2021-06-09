var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(700, 100, 50, 50);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(50,50,50,80);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(400,100,50,50);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(700,300,50,50);
  gameObject3.shapeColor = "green";
}

function draw() {
  background("black");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

 if(isTouching(fixedRect,movingRect)){
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
 }
 else if(isTouching(gameObject1,movingRect)){
  gameObject1.shapeColor = "blue";
  movingRect.shapeColor = "blue";
 }
 else if(isTouching(gameObject2,movingRect)){
  gameObject2.shapeColor = "blue";
  movingRect.shapeColor = "blue";
 }
 else if(isTouching(gameObject3,movingRect)){
  gameObject3.shapeColor = "blue";
  movingRect.shapeColor = "blue";
 }
 else {
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject3.shapeColor = "green";
 }

  drawSprites();
}

