class tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.width=450;
		this.height=600;
		
		this.image=loadImage("images/tree.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.Width, this.height, {isStatic:true})

		
		World.add(world, this.bottomBody)
		

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			push()
			fill(255)
			imageMode(CENTER);
			image(this.image,posBottom.x,posBottom.y,this.width, this.height)
			pop()
			
	}

}