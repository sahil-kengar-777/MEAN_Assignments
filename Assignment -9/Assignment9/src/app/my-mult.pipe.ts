import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true
})
export class MyMultPipe implements PipeTransform {

  transform(value: number, param: number): number {
    let multiplication = 0;
    multiplication = value * param;
    return multiplication;
  }

}
