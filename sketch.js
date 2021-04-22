const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var paper1,ground,bin1,sling;

function setup() {
	createCanvas(1000, 500);
	engine = Engine.create();
	world = engine.world;
	paper1 = new ball(50,50,70);
	sling = new SlingShot(paper1.body,{x:300, y:200});
	ground = new Ground(500,480,1000,20);
	bin1 = new dusbin(900,460,1,10);
	Engine.run(engine);
}

function draw() {
  background("white");
  Engine.update(engine);
  paper1.display();
  ground.display();
  bin1.display();
  sling.display();
  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(paper1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  sling.fly();
}