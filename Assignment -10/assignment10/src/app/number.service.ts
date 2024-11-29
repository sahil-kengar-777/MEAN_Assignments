import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  public ChkPrime(num: number): string {
    if (num <= 1) {
      return "It is Not Prime number"; 
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return "It is Not Prime number"; 
      }
    }
    return "It is Prime number";
  }
}
