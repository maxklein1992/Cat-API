import { Component } from '@angular/core';

import { DeleteFavorite, GetFavorites } from '../../services';
import type { Favorite } from '../../models';

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

  /**
   * Consumes the 'getFavorites' service to retrieve all created favorite breeds belonging to your account
   */
  getFavorites() {
    this.getFavoritesService
      .getFavorites()
      .subscribe((favorites: Favorite[]) => {
        this.favoriteList = favorites;
      });
  }

  /**
   * Consumes the 'deleteFavorite' service to remove a favorite breeds from the list of
   * all favorite breeds belonging to your account
   */
  deleteFavorite(favoriteId: Favorite['id']) {
    this.deleteFavoriteService.deleteFavorite(favoriteId).subscribe(() => {
      // retrieve again the created favorites to see the change
      this.getFavorites();
      this.showToast = true;
    });
  }

  // get favorite breeds at initialization
  ngOnInit(): void {
    this.getFavorites();
  }
}
