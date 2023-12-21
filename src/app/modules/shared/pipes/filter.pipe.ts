import { filter } from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value, searchCriteria) {
    return filter(value, searchCriteria);
  }
}
