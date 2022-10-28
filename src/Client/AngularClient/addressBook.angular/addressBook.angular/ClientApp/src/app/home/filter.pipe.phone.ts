import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterbyphone'
})
export class FilterPhonePipe implements PipeTransform {
  transform(value: any, searchValue: any) {
    if (!searchValue) return value;
    return value.filter((v: { phoneNumber: string; }) =>
      v.phoneNumber.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
  }

}
