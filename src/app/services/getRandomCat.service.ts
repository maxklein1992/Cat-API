import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import type { Cat } from '../models';

@Injectable()
export class GetRandomCat {
  constructor(private http: HttpClient) {}

  /**
   * Retrieve random image of cat
   */
  getRandomCat(): Observable<Cat> {
    return this.http.get<Cat>(`${environment.apiUrl}/images/search`);
  }
}
