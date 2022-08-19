import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GetRandomCat {
  constructor(private http: HttpClient) {}

  /**
   * Retrieve random image of cat
   */
  getRandomCat(): Observable<any> {
    return this.http.get('https://api.thecatapi.com/v1/images/search');
  }
}
