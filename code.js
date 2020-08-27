var backdrop = createSprite(0, 0 ,400, 400);
backdrop.setAnimation("sunshine_showers_1");
backdrop.scale = 2;
backdrop.x = backdrop.width/2;


var bow = createSprite(380, 200,20,70);
bow.setAnimation("bow");

/*var PLAY=1;
var END=0;
var gameState=PLAY;
*/
var score=0;

var redB=createGroup();
var greenB=createGroup();
var blueB=createGroup();
var yellowB=createGroup();
var arrowGroup=createGroup();

textSize(25);
function draw() {
  // background(10);
  
 
  
  
  backdrop.setAnimation("sunshine_showers_1");
  bow.y = World.mouseY;
  
  createEdgeSprites();
  bow.collide(rightEdge);
  
  backdrop.velocityX = -2;
  
  if (backdrop.x <0) {
    backdrop.x = backdrop.width/2;
  }
  
  //movement of bullet
if (keyDown("space")) {
createArrow();
 
}


if (arrowGroup.isTouching(redB)) {
  redB.destroyEach();
  arrowGroup.destroyEach();
    score=score+1;
}




 if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score=score+3;
}



 if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score=score+2;
}



if (arrowGroup.isTouching(yellowB)) {
  yellowB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}




//creation of continuous enemies
var rand=randomNumber(1,4);
if (World.frameCount%100===0) {
  if(rand===1){
    redBalloon();
  }
    else if(rand===2){
      greenBalloon();
    }
    else if(rand===3){
      blueBalloon();
    }
    else
    yellowBalloon();
  }
  
  
 




 
 
 
  drawSprites();
  text("Score : "+score,270,30);
}

function redBalloon() {
  var red = createSprite(0,randomNumber(20, 370), 10, 10);
  red.setAnimation("animation_1");
  red.velocityX = 3;
  red.lifetime = 150;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,randomNumber(20, 370), 10, 10);
  blue.setAnimation("animation_3");
  blue.velocityX = 3;
  blue.lifetime = 150;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,randomNumber(20, 370), 10, 10);
  green.setAnimation("animation_2");
  green.velocityX = 3;
  green.lifetime = 150;
  greenB.add(green);
}

function yellowBalloon() {
  var yellow = createSprite(0,randomNumber(20, 370), 10, 10);
  yellow.setAnimation("animation_4");
  yellow.velocityX = 3;
  yellow.lifetime = 150;
  yellowB.add(yellow);
}

function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.setAnimation("arrow");
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrowGroup.add(arrow);
}











    
    








