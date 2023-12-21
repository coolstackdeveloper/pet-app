import { groupBy } from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {
  transform(value, field) {
    return groupBy(value, field);
  }
}
