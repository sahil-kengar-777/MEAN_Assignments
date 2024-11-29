import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithematicService {

  constructor() { }
  public add(val1 : number, val2 : number) : number{
    return val1 + val2;
  }
  public Sub(val1 : number, val2 : number) : number{
    return val1 - val2;
  }
}
