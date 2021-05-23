const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops = 100;

function preload() {
    
}

function setup() {
   createCanvas(400, 800);

   umbrella = new Umbrella(200, 20);
}

function draw() {
   for(var i = 0; i < maxDrops; i++) {
      drops.push(new createDrop(random(0, 400), random(0, 400)));
   }

   update();

   drawSprites();
}   

