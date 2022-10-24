import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchValue: any) {
    if (!searchValue) return value;
    return value.filter((v: { fullName: string; phoneNumber: string; }) =>
      v.fullName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
      v.phoneNumber.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
  }

}
