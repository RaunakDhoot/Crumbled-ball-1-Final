
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var paperImg;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,675,50,50)

	ground1 = new Ground(600,height,1200,30)

	log1 = new Log(600,675,200,20)
	log2 = new Log(500,585,20,200)
	log3 = new Log(710,585,20,200)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  

  
  ground1.display()
  log1.display()
  log2.display()
  log3.display()
  paper.display()


  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



