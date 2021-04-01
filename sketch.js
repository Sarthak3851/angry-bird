const Eng = Matter.Engine;
const MW = Matter.World;
const MB = Matter.Bodies;

var MyEngine, MyWorld;

var ground,Body1;

function setup(){
    var canvas = createCanvas(1200,400);
    MyEngine = Eng.create();
    world = MyEngine.world;

   
    Ground1= new Ground(600,400,1200,20)

    Bird1= new Bird(200,300)

    Box1 = new Box(700,320,70,70);
    

   Box2 = new Box(920,320,70,70);

   Box3 = new Box (920,240,70,70);

   Box4 = new Box(700,240,70,70);
   

   // ball = MB.circle(400,200,20);
   // MW.add(world,ball);

    pig1=new Pig(810,350);

    log1 = new Log(810,260,300,PI/2);

    log2=new Log(810,180,300,PI/2);

    pig2=new Pig(810,220);
}

function draw(){
    background(0);
    Eng.update(MyEngine);
    Ground1.display();

    Bird1.display();

    Box1.display();

   Box2.display();

   Box3.display();

   Box4.display();

   pig1.display();

   log1.display();

   log2.display();

   pig2.display();

    
  //  ellipseMode(RADIUS)
   // ellipse(ball.position.x,ball.position.y,20,20);

   
}