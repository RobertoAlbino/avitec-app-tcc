import { Injectable } from '@angular/core';

@Injectable()
export class SortService {

  constructor() { }

  sortBy(lista: Array<any>, prop: string) {
    lista.sort((a, b) => {
      if (a[prop] > b[prop])
        return 1;
      if (a[prop] < b[prop])
        return -1;
      return 0;
    })
  }
}