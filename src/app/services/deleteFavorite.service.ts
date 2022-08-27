import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import type { Breed, Favorite } from '../models';

@Injectable()
export class DeleteFavorite {
  sub_id: string;

  constructor(private http: HttpClient) {
    this.sub_id = 'user123';
  }

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'x-api-key': `${environment.apiKey}`,
  });

  options = { headers: this.headers };

  /**
   * Delete favorite breed
   */
  deleteFavorite(favoriteId: Favorite['id']) {
    return this.http.delete(
      `${environment.apiUrl}/favourites/${favoriteId}?sub_id=${this.sub_id}`,
      this.options
    );
  }
}
