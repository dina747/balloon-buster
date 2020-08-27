var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["150fe007-01d8-4920-85d1-dff8380664bf","2fd29b44-eca5-491e-ac74-c1ac354c8c8c","24de1f64-2617-4da7-856b-838bd2c6218c","b3576b53-0b06-4579-8df7-03597a29cfdd","3e5fc411-5f7f-467e-a550-288c6c005444","e7fd1f66-d03f-4369-b772-dd060c138fb5","7cbff76b-f79b-4d09-adbb-bf1bb1cc16f0","9c9d85b1-ece1-40b4-be7b-0237c7bc838f"],"propsByKey":{"150fe007-01d8-4920-85d1-dff8380664bf":{"name":"sunshine_showers_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"IwkTTib9OI.FMJPnuw3ztGiOBMji1l2R","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/150fe007-01d8-4920-85d1-dff8380664bf.png"},"2fd29b44-eca5-491e-ac74-c1ac354c8c8c":{"name":"arrow","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"gjOPyvZzRC4.Z8tp4IvEIHmjBMVvDl_M","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/2fd29b44-eca5-491e-ac74-c1ac354c8c8c.png"},"24de1f64-2617-4da7-856b-838bd2c6218c":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":42,"y":78},"frameCount":1,"looping":true,"frameDelay":12,"version":"1Vqjwf3pRKxpvLpyuy0j_ZmTISbZuY4I","loadedFromSource":true,"saved":true,"sourceSize":{"x":42,"y":78},"rootRelativePath":"assets/24de1f64-2617-4da7-856b-838bd2c6218c.png"},"b3576b53-0b06-4579-8df7-03597a29cfdd":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":35,"y":79},"frameCount":1,"looping":true,"frameDelay":12,"version":"pT7elEnQMyAAs5_Ix91VokUZRXqOgXIF","loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":79},"rootRelativePath":"assets/b3576b53-0b06-4579-8df7-03597a29cfdd.png"},"3e5fc411-5f7f-467e-a550-288c6c005444":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":33,"y":78},"frameCount":1,"looping":true,"frameDelay":12,"version":"VxPT3Br5RxkEBN4XDlS152j6KHI3iTsi","loadedFromSource":true,"saved":true,"sourceSize":{"x":33,"y":78},"rootRelativePath":"assets/3e5fc411-5f7f-467e-a550-288c6c005444.png"},"e7fd1f66-d03f-4369-b772-dd060c138fb5":{"name":"bow","sourceUrl":null,"frameSize":{"x":27,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"ujVyfgI8rG.6F3I5MSKyQt_UkdbdakB3","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":84},"rootRelativePath":"assets/e7fd1f66-d03f-4369-b772-dd060c138fb5.png"},"7cbff76b-f79b-4d09-adbb-bf1bb1cc16f0":{"name":"animation_4","sourceUrl":null,"frameSize":{"x":35,"y":83},"frameCount":1,"looping":true,"frameDelay":12,"version":"8u3rzsClO.Uk2sERULQ5fI4SHRqHgSjA","loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":83},"rootRelativePath":"assets/7cbff76b-f79b-4d09-adbb-bf1bb1cc16f0.png"},"9c9d85b1-ece1-40b4-be7b-0237c7bc838f":{"name":"sunshine_showers_2","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"Qc0K5tDbZ.165KX.Q_EXWGk7yOw7y3bd","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/9c9d85b1-ece1-40b4-be7b-0237c7bc838f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

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











    
    









// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
