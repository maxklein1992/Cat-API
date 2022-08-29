import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import type { Breed } from '../models';

@Injectable()
export class getCountryFlag {
  /**
   * Retrieves a flag from the flags database of the Flag Api
   *
   * @param country_code Country code of the breed
   * @returns request URL of the flag
   */
  getCountryFlag(country_code: Breed['country_code']): string {
    return `${environment.flagUrl}${country_code}`;
  }
}
