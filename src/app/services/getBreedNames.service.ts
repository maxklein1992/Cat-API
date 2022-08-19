import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import type { Breed } from '../models/breed';

@Injectable()
export class GetBreedNames {
  LIMIT = 10;

  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'x-api-key': `6ee743d1-d3d9-4b7a-ae8d-3277890a690d`,
  });

  options = { headers: this.headers };

  /**
   * Retrieve limited breed names (to not spam the API)
   */
  getBreedNames(): Observable<any[]> {
    return this.http.get<Breed[]>(
      `https://api.thecatapi.com/v1/breeds?limit=${this.LIMIT}&page=0`,
      this.options
    );
  }
}
