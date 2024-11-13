class Arithmetic{
    Number1 : number
    Number2 : number
    constructor(num1 : number , num2 : number ){
        this.Number1 = num1
        this.Number2 = num2
    }
    Addition() : number
    {
        var Ans : number = 0;
        Ans = this.Number1 + this.Number2
        return Ans
    }
    Substraction() : number
    {
        var Ans : number = 0;
        Ans = this.Number1 - this.Number2
        return Ans
    }
    Multiplication() : number
    { 
        var Ans : number = 0;
        Ans = this.Number1 * this.Number2
        return Ans
    }

    Division() : number
    { 
        var Ans : number = 0;
        Ans = this.Number1 / this.Number2
        return Ans
    }
}
var Result : number = 0 

var obj1 = new Arithmetic(11, 10)

Result = obj1.Addition()
console.log("Addition is : "+ Result);

Result = obj1.Substraction()
console.log("Substraction is : "+ Result);

Result = obj1.Multiplication()
console.log("Multiplication is : "+ Result);

Result = obj1.Division()
console.log("Division is : "+ Result);

var obj2 = new Arithmetic(51, 42)

Result = obj2.Addition()
console.log("Addition is : "+ Result);

Result = obj2.Substraction()
console.log("Substraction is : "+ Result);

Result = obj2.Multiplication()
console.log("Multiplication is : "+ Result);

Result = obj2.Division()
console.log("Division is : "+ Result);