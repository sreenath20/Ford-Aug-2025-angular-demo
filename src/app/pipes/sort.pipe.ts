import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure:false
})
export class SortPipe implements PipeTransform {

  transform(items: any[], field: string, order: 'asc' | 'desc' = 'asc'): any[] {
    if (!items || !field) return items;

    return items.sort(
      (a, b) => {
        const fieldValueA = a[field]; // fetch value of attribute like age / name
        const fieldValueB = b[field];
     
        if (fieldValueA < fieldValueB) return order === 'asc' ? -1 : 1;
        if (fieldValueA > fieldValueB) return order === 'asc' ? 1 : -1;
        return 0;

      }
    );


  }

}
