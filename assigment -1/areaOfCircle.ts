function Area(radius : number , PI : number = 3.14) : number
{
    var result = PI * radius * radius;
    return result;
}

var areaOfCircle = Area(5);
console.log("Area of Circle is : " + areaOfCircle);
