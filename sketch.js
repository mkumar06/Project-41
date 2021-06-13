const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops = 100;

var drops = []

function preload() {
    boyImage = loadImage("boy.png");
}

function setup() {
   engine = Engine.create() 
   world = engine.world
   
   createCanvas(400, 800);

   umbrella = new Umbrella(200, 20);

   if (frameCount % 100 == 0) {
   for(var i = 0; i < maxDrops; i++) {
      drops.push(new Drops(random(0, 400), random(0, 400)));
   }
}
}

function draw() {
   background("gray");

   Engine.update(engine);
   
   for(var j = 0; j < drops.length; j++) {
      drops[j].update();
      drops[j].display();
   }

   image(boyImage, 200, 700, 100, 100);

   drawSprites();
}   

