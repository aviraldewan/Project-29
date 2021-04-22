const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,stand1,stand2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25;
var polygon,polygonimg,slingshot;

function preload()
{
    polygonimg = loadImage("polygon.png");
}

function setup()
{
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground(1,800,2400,40);
    stand1 = new Ground(450,600,300,17);
    stand2 = new Ground(850,450,300,17);

    b1 = new Log(350,563,40,60);
    b2 = new Log(360,563,40,60);
    b3 = new Log(412,563,40,60);
    b4 = new Log(450,563,40,60);
    b5 = new Log(490,563,40,60);
    b6 = new Log(520,563,40,60);
    b7 = new Log(560,563,40,60);
    b8 = new Log(460,500,40,60);
    b9 = new Log(380,500,40,60);
    b10 = new Log(420,500,40,60);
    b11 = new Log(512,500,40,60);
    b12 = new Log(474,500,40,60);
    b13 = new Log(431,468,40,60);
    b14 = new Log(440,440,40,60);
    b15 = new Log(460,440,40,60);
    b16 = new Log(443,407,40,60);
    b17 = new Log(765,430,40,60);
    b18 = new Log(805,430,40,60);
    b19 = new Log(845,430,40,60);
    b20 = new Log(885,430,40,60);
    b21 = new Log(925,430,40,60);
    b22 = new Log(818,381,40,60);
    b23 = new Log(858,381,40,60);
    b24 = new Log(898,381,40,60);
    b25 = new Log(856,316,40,60);

    var options={
        restitution: 0.3,
        friction: 0.5,
        density: 0.3
    }


    polygon = Bodies.circle(50,200,30,options);
    World.add(world,polygon);

    slingshot = new Slingshot(this.polygon,{x:100,y:200});

}

function draw()
{
    background('black');
    Engine.update(engine);
    //console.log(mouseX,mouseY);
    strokeWeight(2);
    stroke('black');
    fill('white');
    textSize(30);
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 120,95);

    ground.display();
    stand1.display();
    stand2.display();

    fill('cyan');
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    fill('pink');
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b22.display();
    b23.display();
    b24.display();
    fill('blue');
    b13.display();
    b14.display();
    b15.display();
    b25.display();
    fill('grey');
    b16.display();

    imageMode(CENTER)
  image( polygonimg ,polygon.position.x,polygon.position.y,40,40);
  slingshot.display();


}

function mouseDragged()
{
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    slingshot.fly();
}

