import { BrowserModule } from '@angular/platform-browser';
import { GetRandomCat } from './services/getRandomCat.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomCatComponent } from './components/random-cat/random-cat.component';
import { PostFavorite } from './services/postFavorite.service';
import { ButtonComponent } from './UI/button/button.component';
import { BreedOverviewComponent } from './components/breed-overview/breed-overview.component';
import { SearchBreedByName } from './services/searchBreedByName.service';
import { CatImageComponent } from './components/cat-image/cat-image.component';
import { ContainerComponent } from './UI/container/container.component';
import { GetFavorites } from './services/getFavorites.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FavoritesOverviewComponent } from './components/favorites-overview/favorites-overview.component';
import { ToastComponent } from './components/toast/toast.component';
import { DeleteFavorite } from './services/deleteFavorite.service';

@NgModule({
  declarations: [
    AppComponent,
    RandomCatComponent,
    NavbarComponent,
    ButtonComponent,
    BreedOverviewComponent,
    CatImageComponent,
    ContainerComponent,
    FavoritesOverviewComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    GetRandomCat,
    GetFavorites,
    PostFavorite,
    SearchBreedByName,
    DeleteFavorite,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
