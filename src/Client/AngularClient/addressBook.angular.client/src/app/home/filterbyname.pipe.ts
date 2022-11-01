import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterbyname',
})
export class FilterbynamePipe implements PipeTransform {
  transform(value: any, searchValue: any) {
    if (!searchValue) return value;
    return value.filter(
      (v: { fullName: string }) =>
        v.fullName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    );
  }
}
