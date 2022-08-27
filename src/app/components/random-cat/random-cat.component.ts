import { Component, ViewEncapsulation } from '@angular/core';

import { GetRandomCat } from '../../services';
import type { Cat } from '../../models';

@Component({
  selector: 'random-cat-app',
  templateUrl: './random-cat.component.html',
  styleUrls: ['./random-cat.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RandomCatComponent {
  cat: Cat;
  image: string;
  isLoaded: boolean;

  constructor(private getRandomCat: GetRandomCat) {
    this.isLoaded = false;
  }

  ngOnInit(): void {
    this.requestData();
  }

  requestData() {
    this.getRandomCat.getRandomCat().subscribe((cat: Cat[]) => {
      this.cat = cat[0];
      this.image = cat[0].url;
      this.isLoaded = true;
    });
  }
}
