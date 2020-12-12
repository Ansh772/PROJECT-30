const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;

function setup() {
  createCanvas(1200,600);
 

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine)

  ground = new Ground(600,580,1200,20);

  ground2 = new Ground(390,300,260,10);
  ground3 = new Ground(900,400,200,10);

  polygon = new Polygon(50,200,50,50);

  launcher = new Slingshot(polygon.body,{x:150, y:110})
  
  
  block1 = new Box(480,275);
  block2 = new Box(450,275);
  block3 = new Box(420,275);
  block4 = new Box(390,275);
  block5 = new Box(360,275);
  block6 = new Box(330,275);
  block7 = new Box(300,275);
  block8 = new Box(330,235);
  block9 = new Box(360,235);
  block10 = new Box(390,235);
  block11 = new Box(420,235);
  block12 = new Box(450,235);
  block13 = new Box(360,195);
  block14 = new Box(390,195);
  block15 = new Box(420,195);
  block16 = new Box(390,155);

  block17 = new Box(900,275);
  block18 = new Box(900,315);
  block19= new Box(870,315);
  block20= new Box(930,315);
  block21 = new Box(900,355);
  block22 = new Box(870,355);
  block23= new Box(840,355);
  block24 = new Box(930,355);
  block25 = new Box(960,355);
  


}

function draw() {
  background("pink");
  Engine.update(engine);
  ground.display();
  ground2.display();
  ground3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display(); 
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();

  polygon.display();

  launcher.display();
  drawSprites();
}

function mouseDragged()  {
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
}

function mouseReleased()  {
  launcher.fly()
  

}

function keyPressed()  {
  if(keyCode===32)  {
    Matter.Body.setPosition(polygon.body,{x:150, y:200})
    launcher.attach(polygon.body);

  }

}