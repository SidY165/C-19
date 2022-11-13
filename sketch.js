var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostAnimation;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostAnimation = loadAnimation("ghost-standing.png","ghost-jumping.png")
  spookySound = loadSound("spooky.wav");
  doorsGroup= new Group()
  climbersGroup = new Group
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite (300,300)
  ghost.addAnimation("running",ghostAnimation)
  ghost.scale = 0.4

  
}

function spawnDoors(){
if(frameCount%200==0){
  door = createSprite(random(100,500),0)
  door.velocityY = 1
  door.addImage(doorImg)
  doorsGroup.add(door)
  door.lifetime = 600


climber = createSprite(door.x, 50)
climber.addImage(climberImg)
climber.velocityY = 1
climbersGroup.add(climber)
climber.lifetime = 600

ghost.depth = door.depth+1
ghost.depth = climber.depth+1

}

}


function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }

spawnDoors()

if(keyDown("left")){
ghost.x= ghost.x-5
}

if(keyDown("right")){
ghost.x=ghost.x+5
}

if(keyDown("up")){

ghost.velocityY = -5

}

//gravity

ghost.velocityY = ghost.velocityY + 0.8
if(climbersGroup.isTouching(ghost)){
ghost.velocityY = 0

}

    drawSprites()
}
