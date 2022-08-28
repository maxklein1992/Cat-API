import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Favorite, FavoriteImage } from '../models/favorite';

@Injectable()
export class PostFavorite {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'x-api-key': `${environment.catApiKey}`,
  });

  options = { headers: this.headers };

  /**
   * Posts favorite breed to favorites database of Cat Api
   *
   * @param imageId the image id of the favorite breed
   * @returns unique id of the new created favorite
   */
  postFavorite(imageId: FavoriteImage['id']): Observable<Favorite['id']> {
    return this.http.post<Favorite['id']>(
      `${environment.apiUrl}/favourites`,
      {
        image_id: imageId,
        sub_id: environment.sub_id,
      },
      this.options
    );
  }
}
