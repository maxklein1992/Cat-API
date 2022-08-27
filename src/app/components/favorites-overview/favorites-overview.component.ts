import { Component } from '@angular/core';
import { DeleteFavorite, GetFavorites } from 'src/app/services';
import type { Favorite } from 'src/app/models';

@Component({
  selector: 'favorites-overview-app',
  templateUrl: './favorites-overview.component.html',
  styleUrls: ['./favorites-overview.component.scss'],
})
export class FavoritesOverviewComponent {
  favoriteList: Favorite[];
  showToast: boolean;

  constructor(
    private getFavoritesService: GetFavorites,
    private deleteFavoriteService: DeleteFavorite
  ) {
    this.showToast = false;
  }

  getFavorites() {
    this.getFavoritesService
      .getFavorites()
      .subscribe((favorites: Favorite[]) => {
        this.favoriteList = favorites;
      });
  }

  deleteFavorite(favoriteId: Favorite['id']) {
    this.deleteFavoriteService.deleteFavorite(favoriteId).subscribe(() => {
      this.getFavorites();
      this.showToast = true;
    });
  }

  ngOnInit(): void {
    this.getFavorites();
  }
}
