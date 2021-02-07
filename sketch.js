const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var box1;
var polygon;
var slingShot;

function setup(){
    var canvas = createCanvas(1200,400)
    box1 = new Box();
    box2 = new Box();
    box3 = new Box();
    box4 = new Box();
    box5 = new Box();
    box6 = new Box();
    box7 = new Box();
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
    box13 = new Box(360,235,30,40);
    box14 = new Box(390,235,30,40);
    box15 = new Box(420,235,30,40);
    box16 = new Box(390,235,30,40);
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw(){
    textSize(35);
    fill(255);
    text("SCORE: "+score,750,50);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
}
