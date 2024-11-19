import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, param: number): number {
    let sum = 0;
    sum = value + param;
    return sum;
  }

}
