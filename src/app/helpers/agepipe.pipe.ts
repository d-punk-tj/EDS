import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agepipe'
})
export class AgepipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + ' Years Old';
  }

}
