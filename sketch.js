var player
var obj1
var obj2
var edges, goal
function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
  goal=createSprite(580,50,50,50)
  goal.shapeColor="green"
 player=createSprite(120,580,50,50)
 player.shapeColor="blue"
 obj1=createSprite(320,200,100,20)
 obj1.shapeColor="red"
 obj2=createSprite(320,450,100,20)
 obj2.shapeColor="red"
 edges=createEdgeSprites()
 obj1.velocityX=-4
 obj2.velocityX=4
}

function draw() {
  background("black"); 
  drawSprites()
  player.bounceOff(edges[0])
  player.bounceOff(edges[1])
  player.bounceOff(edges[2])
  player.bounceOff(edges[3])
  if(keyDown("up")){
    player.y -=3
  }
  if(keyDown("down")){
    player.y +=4
  }
  if(keyDown("left")){
    player.x -=4
  }
  if(keyDown("right")){
    player.x +=4
  }
  obj1.bounceOff(edges[0])
  obj1.bounceOff(edges[1])
  obj2.bounceOff(edges[0])
  obj2.bounceOff(edges[1])
  if(player.isTouching(obj1)){
    obj1.velocityX=0;
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(obj2)){
    obj2.velocityX=0;
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(goal)){
    
    text("YOU WIN",200,200);
  }
}
