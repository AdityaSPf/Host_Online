
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var gameState = "play";


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
 
}



function setup() {
    createCanvas(400, 400);
  
  monkey =createSprite(100,330,10,10)
  monkey.addAnimation("mon",monkey_running)
  monkey.scale=0.1
  line=createSprite(200,350,400,10)
  II=createSprite(200,343,400,10)
  bananaGroup=new Group();
  obstcleGroup=new Group();
  
}



function draw() {
  if(gameState==="play"){
     
     
  II.visible=false
  
background("#00FFFF")
  monkey.debug=true
  
  spawnCoins();
  spawnobstacle();
  monkey.setCollider("circle", 10, 10, 200);
  
    monkey.velocityY = monkey.velocityY + 0.8

  text("score ="+ score,300,20 )

  monkey.collide(II)
   if (monkey.isTouching(bananaGroup)) {
        bananaGroup.destroyEach();
        score = score + 1
      }
  if (monkey.isTouching(obstcleGroup)) {
     gameState="END"
        
      }
  
 if (keyDown("space") && monkey.y >=310) {
        monkey.velocityY = -15;
      }
  drawSprites()
  }
  if(gameState==="END"){
    background("black")
  text("youScored "+ score,180,220 )
     
     }
}

 function spawnCoins() {
    if (frameCount % 100 === 0) {
      banana = createSprite(400, random(150, 250), 35, 35)
      banana.addImage(bananaImage)
      banana.scale = 0.05
      banana.velocityX = -6
     bananaGroup.add(banana)
    }
  }
function spawnobstacle() {
    if (frameCount % 150 === 0) {
      obstacle = createSprite(400,330, 35, 35)
      obstacle.addImage(obstaceImage)
      obstacle.scale = 0.15
      obstacle.velocityX = -6
     obstcleGroup.add(obstacle)
    }
  }



