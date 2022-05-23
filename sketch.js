const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body= Matter.body;
let engine;
let world;

var ground;

var ball;
var wall2;
var wall1;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ball_options={  
    restitution:0.09
 
  }
  ball=Bodies.circle(100,100,10,ball_options)
  World.add(world,ball)
  var ground_options={
      isStatic:true
  
  }
  
  ground=Bodies.rectangle(200,380,400,20,ground_options)
  World.add(world,ground)
  ground.shapeColor="blue"

  wall1=Bodies.rectangle(300,350,5,40,ground_options)
  World.add(world,wall1)
 wall1.shapeColor="blue"
  
  
  wall2=Bodies.rectangle(380,350,5,40,ground_options)
  World.add(world,wall2)
 wall2.shapeColor="blue"
  }
  
  
  function draw() 
  {
    background(51);
    Engine.update(engine)
    ellipse(ball.position.x,ball.position.y,10)
    rect(ground.position.x,ground.position.y,400,20)
    
    rect(wall1.position.x,wall1.position.y,5,40)
    rect(wall2.position.x,wall2.position.y,5,40)
   
    
    ellipseMode(RADIUS);
    rectMode(CENTER);
    keyPressed1()
  
  }
  function keyPressed()
{
  if(keyCode===RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.001,y:0});
    }
}
function keyPressed1()
{
if(keyCode===UP_ARROW)
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.0,y:-0.001});
}

}
