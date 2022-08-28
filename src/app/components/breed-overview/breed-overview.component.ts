import { Component, ViewEncapsulation } from '@angular/core';

import { environment } from 'src/environments/environment';
import {
  PostFavorite,
  GetBreedNames,
  SearchBreedByName,
} from 'src/app/services';
import type { Breed, BreedName, FavoriteImage } from 'src/app/models';

@Component({
  selector: 'breed-overview-app',
  templateUrl: './breed-overview.component.html',
  styleUrls: ['./breed-overview.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BreedOverviewComponent {
  catBreedName: Breed['name'];
  catBreedList: Breed[];

  catBreedNames: BreedName[];

  showNoResults: boolean;
  showBreeds: boolean;
  showBreedNames: boolean;
  showError: boolean;
  showToast: boolean;

  toastMessage: string;

  IMAGE_URL = 'https://cdn2.thecatapi.com/images/';
  IMAGE_EXTENSION = '.jpg';

  constructor(
    private getBreedNamesService: GetBreedNames,
    private searchBreedService: SearchBreedByName,
    private postFavoriteService: PostFavorite
  ) {
    this.showNoResults = false;
    this.showBreeds = false;
    this.showBreedNames = false;
    this.showToast = false;
    this.showError = false;
  }

  /**
   * Retrieves a flag from the flags database of the Flag Api
   *
   * @param country_code Country code of the breed
   * @returns request URL of the flag
   */
  countryUrl(country_code: Breed['country_code']): string {
    return `${environment.flagUrl}${country_code}`;
  }

  /**
   * Consumes the 'postFavorite' service to push a favorite breed into the favorites database
   *
   * @param imageId the image id of the favorite breed
   */
  postFavorite(imageId: FavoriteImage['id']) {
    this.postFavoriteService.postFavorite(imageId).subscribe(
      () => {
        this.showToast = true;
      },
      () => (this.showError = true)
    );
  }

  /**
   * Consumes the 'getBreedNames' service to retrieve breeds from the breeds database
   */
  getBreedNames() {
    this.getBreedNamesService.getBreedNames().subscribe((breeds: Breed[]) => {
      this.catBreedNames = [];
      this.showError = false;
      this.showNoResults = false;
      this.showBreeds = false;
      this.showBreedNames = true;

      breeds.forEach((breed) => {
        const breedName: BreedName = {
          name: breed.name,
        };
        this.catBreedNames.push(breedName);
      });
    });
  }

  /**
   * Consumes the 'searchBreedByName' service to retrieve breeds by querying a breed name
   */
  searchBreed() {
    this.catBreedList = [];
    this.searchBreedService
      .searchBreedByName(this.catBreedName)
      .subscribe((res: Breed[]) => {
        if (res.length > 0) {
          this.showError = false;
          this.showNoResults = false;
          this.showBreedNames = false;
          this.showBreeds = true;
          this.pushResultsToList(res);
        } else {
          this.showError = false;
          this.showBreeds = false;
          this.showBreedNames = false;
          this.showNoResults = true;
        }
      });
  }

  private pushResultsToList(res: Breed[]) {
    res.forEach((item) => {
      const catBreed: Breed = {
        name: item.name,
        description: item.description,
        life_span: item.life_span,
        origin: item.origin,
        country_code: item.country_code,
        temperament: item.temperament,
        reference_image_id: item.reference_image_id,
        wikipedia_url: item.wikipedia_url,
        image_url:
          this.IMAGE_URL + item.reference_image_id + this.IMAGE_EXTENSION,
      };

      this.catBreedList.push(catBreed);
    });
  }
}
