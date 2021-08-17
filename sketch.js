var anthony,anthonyImg;
var boeing,boeingImg;
var boy,boyImg;
var jet;
var enemyjet;
var bullets,bulletImg;
var coins,coinsImg;
var bg;
var score=0;
var enemyImg;
var anthonyImg1;
var backg,bg1,bg2,background2;
var score=0;
var PLAY=1;
var END =0;
var gameState=PLAY;
//var lives=3
//var play=1;
//var END=0;
//gameState=0;


function preload(){
//anthonyImg=loadAnimation("soldier1.png","soldier2.png","soldier3.png","soldier4.png","soldier5.png","soldier6.png")
boeingImg=loadImage("jet.png")
//boyImg=loadImage("boy.png")
//coinImg=loadImage("coin.png")
bg=loadImage("background.jpg")
bulletImg=loadImage("bullet.jpg")
enemyImg=loadImage("enemy jet.png")
//anthonyImg1=loadAnimation("soldier1.png")
bg1=loadImage("background.jpg")
bg2=loadImage("sky.jpg")

}


function setup() {
  createCanvas(windowWidth,windowHeight);

  boeing=createSprite(200,300,20,10)
  boeing.shapeColor="red"
  boeing.addImage(boeingImg)
  boeing.scale=0.5;
  

 // anthony=createSprite(150,600,30,20)
  //anthony.shapeColor="blue"
  //anthony.addAnimation("Img",anthonyImg1)
  //anthony.addAnimation("Img1",anthonyImg)
  //anthony.scale=0.1
  

 
  enemyGroup1=new Group()
  enemyGroup2=new Group()
  enemyGroup3=new Group()
  enemyGroup4=new Group()
    bulletGroup=new Group()
  
 

  }

  

function draw() {
background(bg1); 

if(gameState===PLAY){
    
  
boeing.x=mouseX;
boeing.y=mouseY;
 
  
  spawnBullets()
  if(bulletGroup.isTouching(enemyGroup1)){
    enemyGroup1.destroyEach();
    bulletGroup.destroyEach();
    score=score+1;
    
  }
  if(bulletGroup.isTouching(enemyGroup2)){
    enemyGroup2.destroyEach();
    bulletGroup.destroyEach();
    score=score+5;
  }
  if(bulletGroup.isTouching(enemyGroup3)){
    enemyGroup3.destroyEach();
    bulletGroup.destroyEach();
    score=score+6;
  }
  if(bulletGroup.isTouching(enemyGroup4)){
    enemyGroup4.destroyEach();
    bulletGroup.destroyEach();
    score=score+3;
  }
  var select_enemy = Math.round(random(1,4));
  
  if (World.frameCount % 60 === 0) {
    if (select_enemy === 1) {
      spawnenemy1();
    } else if (select_enemy === 2) {
    spawnenemy2();
    } else if (select_enemy === 3) {
      spawnenemy3();
    } else {
      spawnenemy4();
    }
  }
  if(enemyGroup1.isTouching(boeing)||enemyGroup2.isTouching(boeing)||enemyGroup3.isTouching(boeing)||enemyGroup4.isTouching(boeing)){
   boeing.visible=false;
   
    gameState=END
   // lifeover()
  }
  
}
drawSprites();
if(gameState===END){
  textSize(30)
  fill ("yellow")
  text("YOU LOSE",500,170);
  text("Press R to restart",500,220);
  enemyGroup1.velocityY=0;
  enemyGroup2.velocityY=0;
  enemyGroup3.velocityY=0;
  enemyGroup4.velocityY=0;
  if(keyWentDown("R")){
    boeing.visible=true
    gameState=PLAY;
    score=0;
    
  }
  
 
}
   textSize(30)
   fill ("red")
   text("SCORE"+score,200,50)

   //text("Lives: "+lives, 200, 80);
  



//if(keyDown(LEFT_ARROW)){
  //anthony.x=anthony.x-5;
 
  
//}

//if(keyDown (RIGHT_ARROW)){
  //anthony.x=anthony.x+5;
  //anthony.changeAnimation("Img1",anthonyImg)
//}




  
}

//function lifeover(){
  //lives = lives - 1;
  //if(lives>=1) {
    //gamestate = "PLAY";
  //}
  //else {
    //gamestate = "END";
  //}
//}
function spawnenemy1(){
  if(World.frameCount%60===0){
  enemy1 = createSprite(100,50,20,20);             
  enemy1.addImage(enemyImg)
  enemy1.scale=0.2
  enemy1.shapeColor="white"
  enemy1.velocityX=-5;

  enemy1.x=Math.round(random(1000,1200))
 enemy1.y=Math.round(random(20,800))

 enemyGroup1.add(enemy1)

  }
}

  function spawnenemy2(){
    if(World.frameCount%60===0){
    enemy2 = createSprite(100,50,20,20);             
    enemy2.addImage(enemyImg)
    enemy2.scale=0.2
    enemy2.shapeColor="white"
    enemy2.velocityX=-5;

    enemy2.x=Math.round(random(1000,1200))
   enemy2.y=Math.round(random(20,800))

   enemyGroup2.add(enemy2)
  
    }
    
  
}
function spawnenemy3(){
  if(World.frameCount%60===0){
  enemy3 = createSprite(100,50,20,20);             
  enemy3.addImage(enemyImg)
    enemy3.scale=0.2
    enemy3.shapeColor="white"
    enemy3.velocityX=-5;

    enemy3.x=Math.round(random(1000,1200))
   enemy3.y=Math.round(random(20,800))

 enemyGroup3.add(enemy3)

  }
  

}
function spawnenemy4(){
  if(World.frameCount%60===0){
  enemy4 = createSprite(100,50,20,20);             
  enemy4.addImage(enemyImg)
    enemy4.scale=0.2
    enemy4.shapeColor="white"
    enemy4.velocityX=-5;

    enemy4.x=Math.round(random(1000,1200))
   enemy4.y=Math.round(random(20,800))

 enemyGroup4.add(enemy4)

  }
  

}
function spawnBullets(){
  bullet=createSprite(boeing.x,boeing.y,10,40) ;
  
  bullet.visible=false
  if(keyDown("space")) {
   bullet.visible=true
   bullet.addImage(bulletImg)
   bullet.velocityX=+5;

bullet.scale=0.01;
  }
  
  bulletGroup.add(bullet)
}
//if (gameState===PLAY){

  //function spawnjet(){
  //if(World.frameCount% 100===0){
    //enemyjet=createSprite(100,50,20,20)
    //enemyjet.addImage(enemyImg)
    //enemyjet.scale=0.2
    //enemyjet.shapeColor="white"
    //enemyjet.velocityX=-5;

    //enemyjet.x=Math.round(random(1000,1200))
   //enemyjet.y=Math.round(random(20,800))

   //coins=createSprite(1000,200,20,30)
    //coins.shapeColor="purple"
    //coins.velocityX=-5
    //coins.addImage(coinImg);
    //coins.scale=0.05;

    //coins.y=Math.round(random(20,800))
//}

//if(keyDown ("SPACE")){
//bullets=createSprite(boeing.x+80,boeing.y,10,40)
//bullets.velocityX=+5;
//bullets.addImage(bulletImg)
//bullets.scale=0.01;
//}
 
//}

//if (gameState===END){
 // fill("black")
  //textSize(20)
  //text("you won",200,200,20,30)

   //boy=createSprite(300,250,20,30)
  //boy.shapeColor="pink"
  
//}
  //if(bullets.isTouching(enemyjet)){
  //enemyjet.destroy();
  //bullets.destroy();
  //}
//}



  
//if(keyDown(UP_ARROW)){
//boeing.y=boeing.y+5;
//}
 


