class Sling {
    constructor(bodyA) {
        this.body = Matter.Constraint.create({
            bodyA: bodyA,
            pointB: { x: 240, y: 420 },
            length: 20,
            stiffness: 0.01
        })

        World.add(world, this.body)
    }

    display() {
        if (this.body.bodyA) {
            var pt1 = this.body.bodyA.position
            var pt2 = this.body.pointB
            strokeWeight(4)
            line(pt1.x, pt1.y, pt2.x, pt2.y);
        }

    }

    fly() {

        this.body.bodyA = null

    }

   attach(body){
  
 this.body.bodyA = body


   }



}