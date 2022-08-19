import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GetFavorites {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'x-api-key': `6ee743d1-d3d9-4b7a-ae8d-3277890a690d`,
  });

  options = { headers: this.headers };

  /**
   * Retrieve all favorite breeds
   */
  getFavorites(): Observable<any> {
    return this.http.get(
      `https://api.thecatapi.com/v1/favourites?limit=20`,
      this.options
    );
  }
}
