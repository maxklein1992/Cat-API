import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import type { CatImage } from '../models';

@Injectable()
export class GetRandomCatImage {
  constructor(private http: HttpClient) {}

  /**
   * Returns random image from images database of Cat Api
   *
   * @returns request URL of cat image
   */
  getRandomCatImage(): Observable<CatImage[]> {
    return this.http.get<CatImage[]>(`${environment.apiUrl}/images/search`);
  }
}
