var bullet,wall,thickness;
var speed,weight;
var gameState, PLAY , END;

function setup() {
  createCanvas(1400,400);
  bullet  = createSprite(50, 200, 20, 20);
  bullet.shapeColor="white";

  PLAY = 1;
  END = 0;

  gameState=PLAY;

  thickness = random(22,83);
  

  wall = createSprite(1300,200,60,200);
  wall.shapeColor=rgb(80,80,80);
  wall.width = thickness;
  

  speed = random(223,321);
  weight = random(30,52);


  
  
  
}

function draw() {
  background(0);  
  
  if(gameState===PLAY){
    bullet.velocityX=speed;
    }
  console.log(bullet.x);
  

   if(isTouching()){  
     
    gameState=END;
     
    bullet.velocityX=0;
    


     var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage<10){
      wall.shapeColor = rgb(0,255,0);
    }
    else if (damage>10){
      wall.shapeColor = rgb(255,0,0);
    }

  fill(rgb(random(0,255),random(0,255),random(0,255)));
  textSize(20);
  text("CLICK DOWN ARROW  TO TEST ANOTHER WALL",500,200);

  
}


drawSprites();
}

function isTouching(){
  if(wall.x-bullet.x<thickness/2+10 ){
    return true;

  }



  else{
    return false;
  }

}

function keyPressed() {
  if (keyCode === DOWN_ARROW ) {

    bullet.destroy();
    wall.destroy();  


    bullet  = createSprite(50, 200, 20, 20);
    bullet.shapeColor="white";
    thickness = random(22,83);
  

  wall = createSprite(1300,200,60,200);
  wall.shapeColor=rgb(80,80,80);
  wall.width = thickness;

  speed = random(223,321);
  weight = random(30,52);

  PLAY = 1;
  END = 0;

  gameState=PLAY;

  
    
     gameState = PLAY;
   }
 }
