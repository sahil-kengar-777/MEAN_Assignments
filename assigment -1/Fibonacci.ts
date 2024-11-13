function Fibonacci(fiboNo: number): void {
    let a = 1, b = 1;
  
    console.log(a); 
    for (let i = 2; b <= fiboNo; i++) {
      console.log(b); 
      let next = a + b;
      a = b;          
      b = next;      
    }
  }

  const input = 21;
  Fibonacci(input);
  