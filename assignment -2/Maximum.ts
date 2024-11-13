function Maximum(arr: number[]): number {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max; 
  }
  const numbers = [23, 89, 6, 29, 56, 45, 77, 32];
  console.log("Maximum number is " + Maximum(numbers));
  