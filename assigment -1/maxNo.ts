function Maximum(num1: number, num2: number, num3 : number): number
{
    var maxNo : number =  num1;
    if(maxNo < num2)
        {
            maxNo = num2
        }
    if(maxNo < num3)
        {
            maxNo = num3
        }
    return maxNo;
}
var maximumNo = Maximum(23, 89, 6);
console.log("Maximum number is : " + maximumNo);