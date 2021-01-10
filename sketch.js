
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bobDiameter
function preload()
{
	
}

function setup() {
	createCanvas(1500, 1500);


	engine = Engine.create();
	world = engine.world;
	bobDiameter = 40
	//Create the Bodies Here.


	Engine.run(engine);
	bob1 = new bob(150, 600,50)
	bob2 = new bob(250, 600,50)
	bob3 = new bob(350, 600,50)
	bob4 = new bob(450, 600,50)
	bob5 = new bob(550, 600,50)

	
	Roof = new roof(400, 250, 600, 100)
    rope1 = new Slingshot(bob1,{x: 150, y:225} )
	rope2 = new Slingshot(bob2.body, Roof.body, -bobDiameter*2, 0 );
	rope3 = new Slingshot(bob3.body, Roof.body, bobDiameter*1, 0 );
	rope4 = new Slingshot(bob4.body, Roof.body, bobDiameter*2, 0 );
	rope5 = new Slingshot(bob5.body, Roof.body, bobDiameter*4, 0 );

}




function draw() {
  rectMode(CENTER);
  background("black");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 // bob6.display();
  Roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
 rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100} );
	}
}

