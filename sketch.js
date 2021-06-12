var back,path,ghost1;
var ghost;

function preload(){
  back = loadImage("ha.jpg")
  ghost=loadAnimation("screen1.png","screen2.png","screen3.png","screen4.png","screen5.png","screen6.png","screen7.png")
}
function setup(){
  createCanvas(900,700);
  // Moving background
  path=createSprite(100,150);
  path.addImage(back);
  path.scale=1
  path.velocityX = -5;
  ghost1=createSprite(50,630);
  ghost1.addAnimation("ani",ghost)
  
}
function draw(){

  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
  drawSprites();
}