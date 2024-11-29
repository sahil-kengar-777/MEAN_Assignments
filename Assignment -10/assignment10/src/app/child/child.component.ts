import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  value : number = 13;
  result : string = "";
  text : string = "Jai GaNesH";
  count : number = 0;
  public constructor(obj1 : NumberService, obj2 : StringService)
  {
    this.result = obj1.ChkPrime(this.value);
    this.count = obj2.CountCapital(this.text);
  }
}
