function Maximum(arr) {
    var firstMax = arr[0];
    var secondMax = -1;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > firstMax) {
            secondMax = firstMax;
            firstMax = arr[i];
        }
        else if (arr[i] > secondMax && arr[i] !== firstMax) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}
var numbers = [23, 89, 6, 29, 56, 45, 77, 32];
var secondMax = Maximum(numbers);
console.log("Second Maximum number is " + secondMax);
