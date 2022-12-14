var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var policeCarImg,thiefImg1,thiefImg2,BgImg;
var coinImg;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  policeCarImg = loadImage("car2.png")
  thiefImg1 = loadImage("thief.png")
  coinImg = loadImage("coin.png")
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
  
// Moving background
path=createSprite(600,600);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating car running
policeCar = createSprite(180,340,30,30);
policeCar.scale=0.8;
policeCar.addImage(policeCarImg)
 
leftBoundary=createSprite(350,0,100,800);
leftBoundary.visible = false;

rightBoundary=createSprite(850,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  policeCar.x = World.mouseX;

  if (frameCount % 60 === 0) {
    var coin = createSprite(700,340,30,30);
    coin.y = Math.round(random(80,120));
    coin.addImage(coinImg);
    coin.scale = 0.7;
    coin.velocityY = 3;
  
  if(policeCar.isTouching(coin)){
    coin.destroy();
  }
    
    
    
    //add each cloud to the group
  }
  
  edges= createEdgeSprites();
  policeCar.collide(edges[3]);
  policeCar.collide(leftBoundary);
  policeCar.collide(rightBoundary);
 
if(path.y > 400 ){
  path.y = height/2;
}

  drawSprites();
}
