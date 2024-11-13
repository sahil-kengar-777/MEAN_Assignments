class Circle
{
    Radius : number
    PI : number = 3.14

    constructor(r : number){
        this.Radius = r
    }
    
    Area(): number {
        return this.PI * this.Radius * this.Radius;
    }
}

class CircleX extends Circle {
    Circumference(): number {
        return 2 * this.PI * this.Radius;
    }
}
var circleX1 = new CircleX(5); 
console.log("Circumference of circleX1:", circleX1.Circumference());
console.log("Area of circleX1:", circleX1.Area());

var circleX2 = new CircleX(10);
console.log("Circumference of circleX2:", circleX2.Circumference());
console.log("Area of circleX2:", circleX2.Area());