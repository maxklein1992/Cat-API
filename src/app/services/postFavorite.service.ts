import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FavoriteImage } from '../models/favorite';

@Injectable()
export class PostFavorite {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'x-api-key': `${environment.apiKey}`,
  });

  options = { headers: this.headers };

  /**
   * Post favorite breed
   */
  postFavorite(imageId: FavoriteImage['id']): Observable<FavoriteImage['id']> {
    return this.http.post<FavoriteImage['id']>(
      `${environment.apiUrl}/favourites`,
      {
        image_id: imageId,
        sub_id: 'user123',
      },
      this.options
    );
  }
}
