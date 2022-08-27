import { Component, ViewEncapsulation } from '@angular/core';
import {
  PostFavorite,
  GetBreedNames,
  SearchBreedByName,
} from 'src/app/services';
import type { Breed, FavoriteImage } from 'src/app/models';

@Component({
  selector: 'breed-overview-app',
  templateUrl: './breed-overview.component.html',
  styleUrls: ['./breed-overview.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BreedOverviewComponent {
  catBreedName: Breed['name'];
  catBreedList: Breed[];

  catBreedNames: Breed[];

  showNoResults: boolean;
  showBreeds: boolean;
  showBreedNames: boolean;
  showError: boolean;
  showToast: boolean;

  toastMessage: string;

  IMAGE_URL = 'https://cdn2.thecatapi.com/images/';
  IMAGE_EXTENSION = '.jpg';
  LIMIT = 6;

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

  postFavorite(imageId: FavoriteImage['id']) {
    this.postFavoriteService.postFavorite(imageId).subscribe(
      () => {
        this.showToast = true;
      },
      () => (this.showError = true)
    );
  }

  getBreedNames() {
    this.getBreedNamesService.getBreedNames().subscribe((breeds: Breed[]) => {
      this.showError = false;
      this.showNoResults = false;
      this.showBreeds = false;
      this.showBreedNames = true;
      this.catBreedNames = breeds;
    });
  }

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
    let limitedResults = res.slice(0, this.LIMIT);

    // For not spamming the API unnecessary
    limitedResults.forEach((item) => {
      const catBreed: Breed = {
        name: item.name,
        description: item.description,
        life_span: item.life_span,
        origin: item.origin,
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
