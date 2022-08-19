import { BUTTONS, RANDOM_CAT } from 'src/app/constants/constants';
import { Component, ViewEncapsulation } from '@angular/core';
import { GetRandomCat } from '../../services/getRandomCat.service';
import type { Cat } from '../../models/cat';

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

  TEXTS = { ...RANDOM_CAT, ...BUTTONS };

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
