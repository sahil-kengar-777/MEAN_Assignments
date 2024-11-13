var ChkArmstrong = (num: number): string => {
    var sum = 0;
    var originalNum = num;
    for (var temp = num; temp > 0; temp = Math.floor(temp / 10))
    {
        var digit = temp % 10;
        sum += digit * digit * digit;
    }
    if (sum === originalNum)
    {
        return "It is an Armstrong number";
    } else
    {
        return "It is not an Armstrong number";
    }
};
var numberToCheck = 153;
console.log(ChkArmstrong(numberToCheck)); 
