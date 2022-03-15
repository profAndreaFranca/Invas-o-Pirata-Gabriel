const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world

var ground,tower,towerImg;
var backgrounImg;



function preload() {
 backgrounImg = loadImage("./assets/background.gif");

  towerImg = loadImage("./assets/tower.png")
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0,height - 1,width *2, 1,options)
  World.add(world,ground);
  
  tower = Bodies.rectangle(160,350,160,310,options)
  World.add(world,tower);
}

function draw() {
  background(189);
  image(backgrounImg,0,0,1200,600)
 
  Engine.update(engine);

  rect(ground.position.x,ground.position.y,width *2, 1)
  
  push()
  imageMode(CENTER)
  image(towerImg,tower.position.x,tower.position.y,160,310)
  pop()

  strokeWeight(2)
  text("X: "+ mouseX + " / " + "Y: "+mouseY,mouseX,mouseY)
}
