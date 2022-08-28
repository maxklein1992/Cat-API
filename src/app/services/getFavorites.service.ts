import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import type { Favorite } from '../models';

@Injectable()
export class GetFavorites {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'x-api-key': `${environment.catApiKey}`,
  });

  options = { headers: this.headers };

  /**
   * Retrieve all created favorites belonging to your account from favorites database of Cat Api
   *
   * @returns request URL of created favorites
   */
  getFavorites(): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(
      `${environment.apiUrl}/favourites`,
      this.options
    );
  }
}
