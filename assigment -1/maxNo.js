function Maximum(num1, num2, num3) {
    var maxNo = num1;
    if (maxNo < num2) {
        maxNo = num2;
    }
    if (maxNo < num3) {
        maxNo = num3;
    }
    return maxNo;
}
var maximumNo = Maximum(23, 89, 6);
console.log("Maximum number is : " + maximumNo);
