import { Pipe, PipeTransform } from '@angular/core';
import { TodoTypes } from "./Itodo-list";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(order: any, fn: Function = (a,b) => a.date < b.date ? 1 : -1): any {
    return order.sort(fn)
  }
}
