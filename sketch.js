var background,backgroundImg;
var ground;
var mario,mario_Running,mario_Stationary;
var lion;
var pillar;
var camera;
var gameState="wait";
var startImg;
var enemyGroup,enemy1,enemy2,enemy3,enemy4;
var pillarGroup;
var coin;
var redPotion;
var red;



function preload (){

    mario_Running=loadAnimation("mario1.png","mario2.png");
    backgroundImg= loadImage("background.png");
   
    
    gameover=loadImage("gameOver.png");
    mario_stationary=loadImage("mario3.png");
    startImg= loadImage("start.png");
    coinImg=loadImage("coin.png");
    redPotion=loadImage("redPotion.png");
    restart=loadImage("restart.png");

    enemy1=loadImage("lion.png");
    enemy2=loadImage("tortoise.png");
    enemy3=loadImage("tiger.png");
    enemy4=loadImage("pillar.png");

}

function setup(){

    


    createCanvas(1500,700);

    /*red=createSprite(300,570,20,30)
    red.addImage(redPotion);
    red.scale=0.1;

    coin=createSprite(1000,450,20,30)
    coin.addImage(coinImg);
    coin.scale=0.2;*/

    ground = createSprite(100,630,1500,20);
    ground.x=ground.width/2;
    ground.visible=true;

    mario=createSprite(100,570,20,30);
    mario.addAnimation(" mario_Running",mario_Running)
    mario.scale=0.3;
    mario.setCollider("rectangle",0,0,mario.width,mario.height);
    mario.debug = false;


   // lion=createSprite(1300,570,20,30)
    //lion.addImage(lionImg);
    //lion.scale=0.3;

    //pillar=createSprite(1000,550,20,30)
   // pillar.addImage(pillarImg);
    //pillar.scale=0.2;

    //restart = createSprite(300,140);
  //restart.addImage(restart);

 enemyGroup=createGroup();
 potionsGroup=createGroup();
 pillarGroup=createGroup();
 coinGroup=createGroup();

  

  //pillar.setCollider("rectangle",0,0,pillar.width-1000,pillar.height);
  //pillar.debug = false;

  
 // enemyGroup.setCollider("rectangle",0,0,enemy.width,enemy.height);
  //enemy.debug=false

}

function draw(){

 

    background(backgroundImg);

    textSize(20);
    text("press w to start",570,200)

    console.log(gameState)      
            
    if(gameState==="wait" && keyDown("w")) {
     
      gameState="play";
    }

    if(gameState==="play"){
      ground.velocityX=-4;
      if (ground.x < 1500){
        ground.x = ground.width/2;
      } 
      if(keyDown("space")) {
        mario.velocityY = -15;
        
        
    }

    mario.velocityY = mario.velocityY + 0.8


    /*if(keyDown("RIGHT_ARROW")) {
        mario.velocityX = +20;
        mario.changeAnimation (mario_Running)
    }

    if(keyDown("LEFT_ARROW")){
        mario.velocityX=-20
        
    }*/

    /*if (coin.isTouching(mario)){
        coin.visible=false;
    }

    if(red.isTouching(mario)){
        red.visible=false;
        mario.scale=0.3
    }*/

    mario.collide(ground);

    spawnEnemy()
    
    
    }
    


    
      

    

   
    
    drawSprites()  
}

function spawnEnemy(){
    if (frameCount % 60 === 0){
      var enemy = createSprite(600,570 ,10,40);
    enemy.velocityX = -4;
    enemy.scale=0.5

    var rand=Math.round(random(1,3))
    switch(rand){

        case 1:enemy.addImage(enemy1);
       break;

        case 2:enemy.addImage(enemy2);
        break;

        case 3:enemy.addImage(enemy3);
        break;

       

        default: break;
    }

    enemy.lifeTime=400;
   
    enemyGroup.add(enemy);
 }
}



    









    

    




  

                  
