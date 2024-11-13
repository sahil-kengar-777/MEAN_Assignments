var Circle = /** @class */ (function () {
    function Circle(r) {
        this.PI = 3.14;
        this.Radius = r;
    }
    Circle.prototype.Area = function () {
        return this.PI * this.Radius * this.Radius;
    };
    return Circle;
}());
var circle1 = new Circle(5);
console.log("Area of circle1:", circle1.Area());
var circle2 = new Circle(10);
console.log("Area of circle2:", circle2.Area());
