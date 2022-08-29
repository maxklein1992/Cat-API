import { Component, ViewEncapsulation } from '@angular/core';

import { GetRandomCatImage } from '../../services';
import type { CatImage } from '../../models';

@Component({
  selector: 'random-cat-image-app',
  templateUrl: './random-cat-image.component.html',
  styleUrls: ['./random-cat-image.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RandomCatImageComponent {
  catImage: CatImage;
  image: string;
  isLoaded: boolean;

  constructor(private getRandomCatImage: GetRandomCatImage) {
    this.isLoaded = false;
  }

  // get random cat image at initialization
  ngOnInit(): void {
    this.requestData();
  }

  /**
   * Consumes the 'getRandomImage' service to retrieve a random cat image from the images database
   */
  requestData() {
    this.getRandomCatImage
      .getRandomCatImage()
      .subscribe((catImage: CatImage[]) => {
        this.catImage = catImage[0];
        this.image = catImage[0].url;
        this.isLoaded = true;
      });
  }
}
