class Umbrella {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 5;
        this.image = loadImage("boy.png");
        World.add (world, this.body, options);
    }
    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.radius);
    }
}