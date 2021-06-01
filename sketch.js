const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops = 100;

var drops = []

function preload() {
    
}

function setup() {
   engine= Engine.create() 
   world= engine.world
   
   createCanvas(400, 800);

   umbrella = new Umbrella(200, 20);

   for(var i = 0; i < maxDrops; i++) {
      drops.push(new Drops(random(0, 400), random(0, 400)));
   }
}

function draw() {
   update();

   drawSprites();
}   

