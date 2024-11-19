import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, param : string): string {
    if(param == "Even")
    {
      return value % 2 == 0 ? "It is Even Number" : "It is Not Even Number";
    }

    if(param == "Odd")
    {
      return value % 2 !== 0 ? "It is Odd Number" : "It is Not Odd Number";
    }

    if(param == "Prime")
    {
     return this.ChkPrime(value) ? "It is a prime number" : "It is not a prime number";
    }

    if(param == "Perfect")
    {
      return this.isPerfect(value) ? "It is Perfect number" : "It is not Perfect number";
    }
    
    return "Invalid Parameter"
  }

  ChkPrime(num: number): boolean {
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
  
  isPerfect(num: number): boolean {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) sum += i;
    }
    return sum === num;
  }

}
