class Basket {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.leftWall = Bodies.rectangle(x - w / 2, y - 45, 10, 100)
        this.rightWall = Bodies.rectangle(x + w / 2, y - 45, 10, 100)
        World.add(world, this.body);



    }
    display() {

        if (keyDown("LEFT")) {
            Matter.Body.setPosition(this.body, { x: this.body.position.x - 5, y: this.body.position.y })
            Matter.Body.setPosition(this.leftWall, { x: this.leftWall.position.x - 5, y: this.leftWall.position.y })
            Matter.Body.setPosition(this.rightWall, { x: this.rightWall.position.x - 5, y: this.rightWall.position.y })
        }

        if (keyDown("RIGHT")) {
            Matter.Body.setPosition(this.body, { x: this.body.position.x + 5, y: this.body.position.y })
            Matter.Body.setPosition(this.leftWall, { x: this.leftWall.position.x + 5, y: this.leftWall.position.y })
            Matter.Body.setPosition(this.rightWall, { x: this.rightWall.position.x + 5, y: this.rightWall.position.y })
        }




        var groundPos = this.body.position;
        push()
        translate(groundPos.x, groundPos.y);
        rectMode(CENTER)
        //strokeWeight(4);
        fill(128, 128, 128)
        rect(0, 0, this.w, this.h);
        rect(-this.w / 2, -45, 10, 100);
        rect(this.w / 2, -45, 10, 100);
        pop()

    }
}