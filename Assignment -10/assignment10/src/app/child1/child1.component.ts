import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  value : number = 11;
  result : string = ""; 
  public constructor(obj : NumberService)
  {
    this.result = obj.ChkPrime(this.value);
  }
}
