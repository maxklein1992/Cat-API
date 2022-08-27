import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import type { Breed } from '../models';

@Injectable()
export class GetBreedNames {
  LIMIT = 10;

  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'x-api-key': `${environment.catApiKey}`,
  });

  options = { headers: this.headers };

  /**
   * Retrieve limited breed names (to not spam the API)
   */
  getBreedNames(): Observable<Breed[]> {
    return this.http.get<Breed[]>(
      `${environment.apiUrl}/breeds?limit=${this.LIMIT}&page=0`,
      this.options
    );
  }
}
