var ball;
var log1;
var log2;
var log3;
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200,650);


	engine = Engine.create();
	world = engine.world;

	log1 = new Ground(783,552,15,110);
	log2 = new Ground(900,613,230,15);
	log3 = new Ground(1018,552,15,110);
    

	ground=createSprite(width/2, 630, width,10);
	ground.shapeColor=color("yellow")
	
	ball = new Ball(300,320,30);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 630, width, 10 , {isStatic:true} );
	World.add(world, ground); 
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  log1.display();
  log2.display();
  log3.display();
  drawSprites();
 
}


function keyPressed(){
    if(keyCode === UP_ARROW) {
        
      Matter.Body.applyForce(ball.body,ball.body.position,{x:65,y:-65});
 
    }
 }