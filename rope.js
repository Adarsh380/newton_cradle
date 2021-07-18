class rope{
	constructor(bodyA, bodyB, pointBx, pointBy)
	{
		this.pointBx = pointBx;
		this.pointBy = pointBy;

		//create rope constraint here
		this.constraint = Matter.Constraint.create({
			bodyA: bodyA,
			bodyB: bodyB,
			pointB:{x:pointBx, y:pointBy},
			length:200,
			stiffness:0.1
		});

		World.add(world, this.constraint);
	}


    //create display() here 
	display() {

		push();
		var bodyAPosition = this.constraint.bodyA.position;
		var bodyBPosition = this.constraint.bodyB.position;

		strokeWeight(2);
		line(bodyAPosition.x, bodyAPosition.y, bodyBPosition.x + this.pointBx, bodyBPosition.y + this.pointBy);
		pop();
	}


}
