import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import type { Favorite } from '../models';

@Injectable()
export class GetFavorites {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'x-api-key': `${environment.apiKey}`,
  });

  options = { headers: this.headers };

  /**
   * Retrieve all favorite breeds
   */
  getFavorites(): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(
      `${environment.apiUrl}/favourites`,
      this.options
    );
  }
}
