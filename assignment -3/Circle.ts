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
var circle1 = new Circle(5);
console.log("Area of circle1:", circle1.Area());

var circle2 = new Circle(10); 
console.log("Area of circle2:", circle2.Area());