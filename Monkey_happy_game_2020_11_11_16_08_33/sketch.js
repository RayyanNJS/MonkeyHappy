
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4
  ground.x=ground.width/2;
  
  
}


function draw() {
  background(200)
  
  if (ground.x < 60) {
    
    ground.x = ground.width/2;
    
  }
  
  if(keyWentDown("space")) {
    
    monkey.velocityY = -13;
    
  }
  
   monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  banana();
  
  drawSprites();

  
}

function banana() {
  if (frameCount % 60 === 0){
     //creates the obstacle sprite
   var banana = createSprite(500,165,10,40);
     //sets the velocity of the obstacle to -6
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.velocityX = -4;
    banana.lifetime = 200;
  }
}



function obstacle() {
  
  
  
  
}




