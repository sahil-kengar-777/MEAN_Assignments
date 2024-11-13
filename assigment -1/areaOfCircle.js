function Area(radius, PI) {
    if (PI === void 0) { PI = 3.14; }
    var result = PI * radius * radius;
    return result;
}
var areaOfCircle = Area(5);
console.log("Area of Circle is : " + areaOfCircle);
