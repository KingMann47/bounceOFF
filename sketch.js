var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObjet4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 750, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY=-5;
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor= "green";

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor= "green";

  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor= "green";

  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor= "green";
  gameObject4.velocityY=5;




 
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
  
  bounceOff(gameObject4,fixedRect);
  
  
  
  drawSprites();
}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 
      return true;
}
else {
  
  return false;


}
}

function bounceOff(object1,object2){
if(object1.x - object2.x < object2.width/2 + object1.width/2
  && object2.x - object1.x < object2.width/2 + object1.width/2){

  object1.velocityX = object1.velocityX*(-1);
  object2.velocityX = object2.velocityX*(-1);

}

if(object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){

    object1.velocityY = object1.velocityY*(-1);
  object2.velocityY = object2.velocityY*(-1);

}

}
