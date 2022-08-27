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
  user: string;

  constructor(private getRandomCat: GetRandomCat) {
    this.isLoaded = false;
    this.user = 'userDummy';
  }

  ngOnInit(): void {
    this.requestData();
  }

  requestData() {
    this.getRandomCat.getRandomCat().subscribe((cat: Cat) => {
      this.cat = cat;
      this.image = cat.url;
      this.isLoaded = true;
    });
  }
}
