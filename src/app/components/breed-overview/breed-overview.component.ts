import { Component, ViewEncapsulation } from '@angular/core';

import { environment } from '../../../environments/environment';
import {
  PostFavorite,
  GetBreedNames,
  SearchBreedByName,
  getCountryFlag,
} from '../../services';
import type { Breed, BreedName, FavoriteImage } from '../../models';

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

  constructor(
    private getCountryFlagService: getCountryFlag,
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
  getCountryFlag(country_code: Breed['country_code']): string {
    return this.getCountryFlagService.getCountryFlag(country_code);
  }

  /**
   * Consumes the 'postFavorite' service to push a favorite breed into the list of favorites
   * belonging to your account
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
   * Consumes the 'searchBreedByName' service to retrieve breeds by querying (part of) a breed name
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

  // Filter to only variables we are going to use
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
        image_url: environment.breedUrl + item.reference_image_id + '.jpg',
      };

      this.catBreedList.push(catBreed);
    });
  }
}
