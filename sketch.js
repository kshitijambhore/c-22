//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object,ground;

function setup() {
  createCanvas(400,400);
  
  engine=Engine.create();
  world = engine.world;

  var obj_options={
    restitution:1.0
  }

  object = Bodies.circle(200,100,50,obj_options);
  World.add(world,object);

  console.log(object);

  var goption={
    isStatic:true
  }
  ground =Bodies.rectangle(200,380,400,20,goption)
World.add(world,ground)
}

function draw() {
  Engine.update(engine);
  background(0);
  rectMode(CENTER)
  ellipse(object.position.x,object.position.y,50,50)
rect (ground.position.x,ground.position.y,400,20)
}