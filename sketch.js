var polygon;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
  createCanvas(1000,500);

  engine = Engine.create();
  world = engine.world;
  
  ground1 = new Ground(450,450,400,20);
  ground2 = new Ground(850,250,200,20);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  string = new String(this.polygon,{x:100,y:200});

  //Tower 1
  //level 1
  block1 = new Block(360,420,30,40);
  block2 = new Block(390,420,30,40);
  block3 = new Block(420,420,30,40);
  block4 = new Block(450,420,30,40);
  block5 = new Block(480,420,30,40);
  block6 = new Block(510,420,30,40);
  block7 = new Block(540,420,30,40);
  //level 2
  block8 = new Block(390,380,30,40);
  block9 = new Block(420,380,30,40);
  block10 = new Block(450,380,30,40);
  block11 = new Block(480,380,30,40);
  block12 = new Block(510,380,30,40);
  //level 3
  block13 = new Block(420,340,30,40);
  block14 = new Block(450,340,30,40);
  block15 = new Block(480,340,30,40);
  //Top
  block16 = new Block(450,300,30,40);

  //Tower 2
  //level 1
  block17 = new Block(790,220,30,40);
  block18 = new Block(820,220,30,40);
  block19 = new Block(850,220,30,40);
  block20 = new Block(880,220,30,40);
  block21 = new Block(910,220,30,40);
  //level 2
  block22 = new Block(820,180,30,40);
  block23 = new Block(850,180,30,40);
  block24 = new Block(880,180,30,40);
  //Top 
  block25 = new Block(850,140,30,40);

  Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(211,211,211);  
  ground1.display();
  ground2.display();
  //Tower 1
  //level 1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  //level 2
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  //level 3
  block13.display();
  block14.display();
  block15.display();
  //Top
  block16.display();

  //Tower 2
  //level 1
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  //level 2
  block22.display();
  block23.display();
  block24.display();
  //level 3
  block25.display();

  string.display();

  drawSprites();
}

function mouseDragged(){
	polygon.body.position.x = mouseX;
	polygon.body.position.y = mouseY;
 }
 
 function mouseReleased(){
	string.chain.bodyA=null;
 
 }