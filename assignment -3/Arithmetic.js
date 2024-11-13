var Arithmetic = /** @class */ (function () {
    function Arithmetic(num1, num2) {
        this.Number1 = num1;
        this.Number2 = num2;
    }
    Arithmetic.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.Number1 + this.Number2;
        return Ans;
    };
    Arithmetic.prototype.Substraction = function () {
        var Ans = 0;
        Ans = this.Number1 - this.Number2;
        return Ans;
    };
    Arithmetic.prototype.Multiplication = function () {
        var Ans = 0;
        Ans = this.Number1 * this.Number2;
        return Ans;
    };
    Arithmetic.prototype.Division = function () {
        var Ans = 0;
        Ans = this.Number1 / this.Number2;
        return Ans;
    };
    return Arithmetic;
}());
var Result = 0;
var obj1 = new Arithmetic(11, 10);
Result = obj1.Addition();
console.log("Addition is : " + Result);
Result = obj1.Substraction();
console.log("Substraction is : " + Result);
Result = obj1.Multiplication();
console.log("Multiplication is : " + Result);
Result = obj1.Division();
console.log("Division is : " + Result);
var obj2 = new Arithmetic(51, 42);
Result = obj2.Addition();
console.log("Addition is : " + Result);
Result = obj2.Substraction();
console.log("Substraction is : " + Result);
Result = obj2.Multiplication();
console.log("Multiplication is : " + Result);
Result = obj2.Division();
console.log("Division is : " + Result);
