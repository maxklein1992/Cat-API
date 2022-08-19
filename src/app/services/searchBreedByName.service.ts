import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import type { Breed } from '../models/breed';

@Injectable({
  providedIn: 'root',
})
export class SearchBreedByName {
  constructor(private http: HttpClient) {}

  /**
   * Search breed by breed name
   */
  searchBreedByName(breed: string): Observable<any> {
    return this.http.get<Breed>(
      `https://api.thecatapi.com/v1/breeds/search?q=${breed}`
    );
  }
}
