import { orderBy } from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(value, columns, orders = ['asc']): unknown {
    return orderBy(value, columns, orders);
  }
}
