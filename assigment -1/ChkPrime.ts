function ChkPrime(num: number): boolean {
    if (num <= 1) {
      return false; 
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false; 
      }
    }
    return true; 
  }

  const inputNumber = 11;
  if (ChkPrime(inputNumber)) {
    console.log("It is a prime number");
  } else {
    console.log("It is not a prime number");
  }
  