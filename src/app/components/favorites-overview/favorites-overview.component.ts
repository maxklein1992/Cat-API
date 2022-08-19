import { Component } from '@angular/core';
import { DeleteFavorite } from 'src/app/services/deleteFavorite.service';
import { FAVORITES_OVERVIEW } from 'src/app/constants/constants';
import { GetFavorites } from 'src/app/services/getFavorites.service';

@Component({
  selector: 'favorites-overview-app',
  templateUrl: './favorites-overview.component.html',
  styleUrls: ['./favorites-overview.component.scss'],
})
export class FavoritesOverviewComponent {
  favoriteList: any = [];
  showToast: boolean;

  constructor(
    private getFavoritesService: GetFavorites,
    private deleteFavoriteService: DeleteFavorite
  ) {
    this.showToast = false;
  }

  TEXTS = { ...FAVORITES_OVERVIEW };

  getFavorites() {
    this.getFavoritesService.getFavorites().subscribe((favorites) => {
      this.favoriteList = favorites;
    });
  }

  deleteFavorite(favoriteId: number) {
    this.deleteFavoriteService.deleteFavorite(favoriteId).subscribe(() => {
      this.getFavorites();
      this.showToast = true;
    });
  }

  ngOnInit(): void {
    this.getFavorites();
  }
}
