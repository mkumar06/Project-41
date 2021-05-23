class Drops {
    constructor(x, y) {
        var options = {
            friction: 0.1,
        }
        this.body = Bodies.circle(x, y, 3, options);
        this.radius = 3;
        World.add (world, this.body, options);
    }
    display() {
        push();
        ellipseMode(CENTER);
        fill("red");
        ellipse(this.body.position.x, this.body.position.y)
        pop();
    }
}

function update() {
    if(this.drops.position.y > height) {
        Matter.Body.setPosition(this.drops, {x: random(0, 400), y: random(0, 400)})
    }
}
