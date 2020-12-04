const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var particle = [];
var div1,div2,div3,div4,div5,div6;
var ground;
var plinko1,plink2,plinko3,plinko4;
var plinko5,plinko6,plinko7,plinko8,plinko9,plinko10,plinko11,plinko12,plinko13,plinko14,plinko15;
var plinko16,plinko17,plink18,plinko19,plinko20,pinko21,plinko22,plinko23,plinko24,plinko25,plinko26,plinko27,plinko28;
var ball1;
var plinko29,plinko30;


function setup() {

  createCanvas(800,700);

  engine = Engine.create();
  world = engine.world;




  ground = new Ground(400,700,1000,20);
  div1 = new Division(100,300,10,400);
  div2 = new Division(300,300,10,400);
  div3 = new Division(500,300,10,400);
  div4 = new Division(700,300,10,400);
  div5 = new Division(5,300,10,400);
  div6 = new Division(790,300,10,400);
   ball1 = new ball(160,50,10);
  plinko1 = new Plinko(100,200,10);
  plinko2 = new Plinko(140,200,10);
  plinko3 = new Plinko(180,200,10);
  plinko4 = new Plinko(220,200,10);
  plinko5 = new Plinko(260,200,10);
  plinko6 = new Plinko(300,200,10);
  plinko7 = new Plinko(340,200,10);
  plinko8 = new Plinko(380,200,10);
  plinko9 = new Plinko(420,200,10);
  plinko10 = new Plinko(460,200,10);
  plinko11 = new Plinko(500,200,10);
  plinko12 = new Plinko(540,200,10);
  plinko13 = new Plinko(580,200,10);
  plinko14 = new Plinko(620,200,10);
  plinko15 = new Plinko(660,200,10);
  plinko16 = new Plinko(100,160,10);
  plinko17 = new Plinko(140,160,10);
  plinko18 = new Plinko(180,160,10);
  plinko19 = new Plinko(220,160,10);
  plinko20 = new Plinko(260,160,10);
  plinko21 = new Plinko(300,160,10);
  plinko22 = new Plinko(340,160,10);
  plinko23 = new Plinko(380,160,10);
  plinko24 = new Plinko(420,160,10);
  plinko25 = new Plinko(460,160,10);
  plinko26 = new Plinko(500,160,10);
  plinko27 = new Plinko(540,160,10);
  plinko28 = new Plinko(580,160,10);
  plinko29 = new Plinko(620,160,10);
  plinko30 = new Plinko(660,160,10);




  
   for (var j = 0; j < particles.length; j++)
       {
         particles[j],display();
       }



   

  
  








}

function draw() {
  background("yellow");  




plinko1.display();
plinko2.display();
plinko3.display();
plinko4.display();
plinko5.display();
plinko6.display();
plinko7.display();
plinko8.display();
plinko9.display();
plinko10.display();
plinko11.display();
plinko12.display();
plinko13.display();
plinko14.display();
plinko15.display();
plinko16.display();
plinko17.display();
plinko18.display();
plinko19.display();
plinko20.display();
plinko21.display();
plinko22.display();
plinko23.display();
plinko24.display();
plinko25.display();
plinko26.display();
plinko27.display();
plinko28.display();
plinko29.display();
plinko30.display();
ball1.display();
div1.display();
div2.display();
div3.display();
div4.display();
div5.display();
div6.display();





ground.display();




  drawSprites();
}