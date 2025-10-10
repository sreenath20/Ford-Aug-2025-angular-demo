import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
  // ,  pure:false
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string, field: string): any[] {
    if (!items || !searchText || !field) return items;
    // if(items ===null || items === undefined)
    // to make case incencitive search
    searchText = searchText.toLowerCase();

    return items.filter(item => item[field].toString().toLowerCase().includes(searchText));
  }

}
