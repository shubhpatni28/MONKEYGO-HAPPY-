
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var survivaltime=0;
var HIGHSCORE=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,8,8);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
 // console.log(ground.x);
 
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
}


function draw() {
background("white");
  
  if(ground.x>0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y>=314.3){
    monkey.velocityY=-13;
   
  }
  
  if(monkey.isTouching(obstacleGroup)){
    
    monkey.setVelocity(0,0);
    obstacleGroup.setVelocityEach(0,0);
    FoodGroup.setVelocityEach(0,0);
    ground.setVelocity(0,0);
    survivaltime=0;
    
   }
  
  
    monkey.velocityY=monkey.velocityY+0.5   
  
  monkey.collide(ground);
  //console.log(monkey.y);
  
  food();
  obstaclez();
  
   fill("red")
  textSize=30;
 text( " HighScore : "+HIGHSCORE,50,60);

   if(HIGHSCORE<survivaltime){
    HIGHSCORE=survivaltime
   }
 
  drawSprites();
  stroke("white");
  textSize=(29);
  fill("red");
  text("SURVIVAL TIME : "+survivaltime,200,50);
  
   stroke("white");
  textSize=(29);
  fill("red");
  
  survivaltime= survivaltime+Math.round(getFrameRate()/60);
  
}

function food(){
    if (frameCount % 60 === 0) {
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3
      
    banana.scale=0.1;
     //assign lifetime to the variable
    banana.setlifetimeEach = 400;
      FoodGroup.add(banana);
  
}

}

function obstaclez(){
  if(frameCount%300===0){
    obstacle=createSprite(400,324,30,30);
    obstacle.addImage("obs",obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-(6+survivaltime/100);
     var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacleImage);
              break;
              default : break;
            
              
             
  }
   obstacleGroup.add(obstacle);
      obstacle.setliftimeEach=400;
}
  
}
