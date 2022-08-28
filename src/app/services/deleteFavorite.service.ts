import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import type { Favorite } from '../models';

@Injectable()
export class DeleteFavorite {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'x-api-key': `${environment.catApiKey}`,
  });

  options = { headers: this.headers };

  /**
   * Delete favorite breed from favorites database of Cat Api from your account
   *
   * @param favoriteId the id of the favorite breed
   */
  deleteFavorite(favoriteId: Favorite['id']) {
    return this.http.delete(
      `${environment.apiUrl}/favourites/${favoriteId}?sub_id=${environment.sub_id}`,
      this.options
    );
  }
}
