
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//function preload()
//{
	
//}

var box1, box2, box3, paper

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  box1= new Box(690,650,200,20);
	box2= new Box(600, 610, 20, 100);
	box3= new Box(780,610,20,100);
  paper= new Paper(50, 300, 10);
  ground= new Ground(400,670,800,20)

	Engine.run(engine);
  
}


function draw() { 
  rectMode(CENTER);
  background(0);
  
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  ground.display();

  keyPressed();
  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) { 
    Body.applyForce(paper.body, paper.body.position, {x:1,y:-1});
  }
}
