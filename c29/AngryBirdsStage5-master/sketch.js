const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1,pig1;
var platform,backgroundimg;
var bird, slingShot;
function preload (){
    backgroundimg = loadImage("jungle.jpg");
    }
function setup(){
    var canvas = createCanvas(1500,900);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1800,20);
    platform = new Ground(150, 450, 200, 20);
    platform2 = new Ground(1200,400,300,20);
    pig1 = new Pig(500,800);
    pig2 = new Pig(570,820);
    pig3 = new Pig(640,790);
    pig4 = new Pig(710,760);
    pig5 = new Pig(780,760);
    pig6 = new Pig(850,790);
    pig7 = new Pig(920,820);
    pig8 = new Pig(990,850);
    pig9 = new Pig(1100,350);
    pig10 = new Pig(1170,320);
    pig11 = new Pig(1240,320);
    pig12 = new Pig(1310,350);
    
    box1 = new Box(500,850,70,70);
    box2 = new Box(570,850,70,70);
    box3 = new Box(640,850,70,70);
    box4 = new Box(710,850,70,70);
    box5 = new Box(780,850,70,70);
    box6 = new Box(850,850,70,70);
    box7 = new Box(920,850,70,70);
    box8 = new Box(990,850,70,70);

    box9 = new Box(570,820,70,70);
    box10 = new Box(640,820,70,70);
    box11 = new Box(710,820,70,70);
    box12 = new Box(780,820,70,70);
    box13 = new Box(850,820,70,70);
    box14 = new Box(920,820,70,70);

    box15 = new Box(640,790,70,70);
    box16 = new Box(710,790,70,70);
    box17 = new Box(780,790,70,70);
    box18 = new Box(850,790,70,70);

    box19 = new Box(710,760,70,70);
    box20 = new Box(780,760,70,70);

    box21 = new Box(1100,350,70,70);
    box22 = new Box(1170,350,70,70);
    box23 = new Box(1240,350,70,70);
    box24 = new Box(1310,350,70,70);

    box25 = new Box(1170,320,70,70);
    box26 = new Box(1240,320,70,70);

    
    bird = new Bird(200,100);
    slingshot = new SlingShot(bird.body,{x:200, y:280});
}

function draw(){
    background(backgroundimg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
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
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    pig1.display();
    pig2.display();
    pig3.display();
    pig4.display();
    pig5.display();
    pig6.display();
    pig7.display();
    pig8.display();
    pig9.display();
    pig10.display();
    pig11.display();
    pig12.display();
    bird.display();
    platform.display();   
    platform2.display();
    slingshot.display();    
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg2);
    console.log(backgroundImg);
}