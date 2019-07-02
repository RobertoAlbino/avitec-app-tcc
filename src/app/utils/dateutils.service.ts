import { Injectable } from '@angular/core';

import * as moment from 'moment';

@Injectable()
export class DateUtilsService {

  constructor() { }

  formatDate(date) {
    return moment(date).format('DD/MM/YYYY [as] HH:mm:ss');
  }
}