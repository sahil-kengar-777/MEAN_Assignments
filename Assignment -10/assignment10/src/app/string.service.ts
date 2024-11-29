import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  public CountCapital(str : string): number{
    let result : number = 0;
    for (let i = 0; i < str.length; i += 1) {
      if (str[i].toUpperCase() === str[i] && " " !== str[i]) {
        result++;
      }
    }
    return result;
  }
}
