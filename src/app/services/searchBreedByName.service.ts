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
   * Search for a breed from the breeds database of Cat Api by using (part of) the breed name as 'q' query parameter
   *
   * @param breedName the name of the breed
   * @returns breeds
   */
  searchBreedByName(breedName: Breed['name']): Observable<Breed[]> {
    return this.http.get<Breed[]>(
      `${environment.apiUrl}/breeds/search?q=${breedName}`
    );
  }
}
