import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import type { Breed } from '../models';

@Injectable()
export class GetBreedNames {
  LIMIT = 10;

  constructor(private http: HttpClient) {}

  // A valid API key is required in this service to query parameters
  headers = new HttpHeaders({
    'content-type': 'application/json',
    'x-api-key': `${environment.catApiKey}`,
  });

  options = { headers: this.headers };

  /**
   * Get all breeds from breeds database of Cat Api (needed to get all breed names)
   *
   * @returns request URL of breeds
   */
  getBreedNames(): Observable<Breed[]> {
    return this.http.get<Breed[]>(
      `${environment.apiUrl}/breeds?limit=${this.LIMIT}&page=0`,
      this.options
    );
  }
}
