
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score = 0;
var Ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey = createSprite(80,315,20,50);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;

  Ground = createSprite(400,350,900,10);
  Ground.x = Ground.width /2;
  Ground.velocityX = -2;
  //console.log(Ground.x);
  
  
  bananaGroup = new Group();
  obstaclesGroup = new Group();
  
}


function draw() {
background("lightPink");
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :" + score ,50,50);
  
  stroke ("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time :" +survivalTime,200,50);
  
  if (Ground.x < 0){
      Ground.x = Ground.width/2;
  
    }
  
  monkey.collide(Ground);
  FoodGroup();
  spawnObstacles();
  
  
  if(keyDown("space")) {
    monkey.velocityY = -12;
  }
  //add gravity
  monkey.velocityY = monkey.velocityY + 1.2;
  
  
  
  
  drawSprites();
}

function FoodGroup(){
  if(frameCount % 80 === 0) {
    var banana = createSprite(600,165,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.scale = 0.05;
    banana.velocityX = -4;
    banana.lifetime = 200;
   
    monkey.depth = banana.depth;
    monkey.depth = monkey.depth + 1;
     
    bananaGroup.add(banana);
}
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,330,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -5;
    obstacle.lifetime = 200;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    
    obstaclesGroup.add(obstacle);
  }
}