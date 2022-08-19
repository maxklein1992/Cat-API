import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import type { Breed } from '../models/breed';

@Injectable()
export class DeleteFavorite {
  sub_id: string;

  constructor(private http: HttpClient) {
    this.sub_id = 'user123';
  }

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'x-api-key': `6ee743d1-d3d9-4b7a-ae8d-3277890a690d`,
  });

  options = { headers: this.headers };

  /**
   * Delete favorite breed
   */
  deleteFavorite(favoriteId: number): Observable<any> {
    return this.http.delete<Breed>(
      `https://api.thecatapi.com/v1/favourites/${favoriteId}?sub_id=${this.sub_id}`,
      this.options
    );
  }
}
