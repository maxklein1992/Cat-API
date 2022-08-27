import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import type { Breed } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SearchBreedByName {
  constructor(private http: HttpClient) {}

  /**
   * Search breed by breed name
   */
  searchBreedByName(breedName: Breed['name']): Observable<Breed[]> {
    return this.http.get<Breed[]>(
      `${environment.apiUrl}/breeds/search?q=${breedName}`
    );
  }
}
