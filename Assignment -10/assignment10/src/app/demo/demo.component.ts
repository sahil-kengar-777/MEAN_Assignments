import { Component, inject } from '@angular/core';
import { ArithematicService } from '../arithematic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  value1 = 21;
  value2 = 11;

  Addition : number = 0;
  Subtraction : number = 0;
  
  constructor(private sobj : ArithematicService)
  {
    this.Addition = sobj.add(this.value1 , this.value2);
    this.Subtraction = sobj.Sub(this.value1, this.value2);
  }
  
}
