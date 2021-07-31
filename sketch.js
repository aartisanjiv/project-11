var runner , runner_running;
var path , pathImage; 
var boundryLeft , boundryRight ;

function preload(){
  //pre-load images
  runner_running = loadAnimation("Runner-1.png" ,"Runner-2.png");
  pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImage);

  boundryLeft = createSprite(0,0,100,800);
  boundryLeft.visible = false ;

  boundryRight = createSprite(410,0,100,800);
  boundryRight.visible = false ;

  runner = createSprite(200,300);
  runner.addAnimation("runner" , runner_running);
  runner.scale = 0.08;
  
}

function draw() {
  background("green");
  path.velocityY = 5;
  
  if(path.y > 400){
    path.y = height/2 ;
  }
  runner.x = World.mouseX ; 
  runner.collide(boundryRight);
  runner.collide(boundryLeft) ;
  drawSprites();
}
