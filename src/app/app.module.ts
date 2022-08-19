import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GetRandomCat } from './services/getRandomCat.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BreedOverviewComponent } from './components/breed-overview/breed-overview.component';
import { ButtonComponent } from './UI/button/button.component';
import { CatImageComponent } from './components/cat-image/cat-image.component';
import { ContainerComponent } from './UI/container/container.component';
import { DeleteFavorite } from './services/deleteFavorite.service';
import { FavoritesOverviewComponent } from './components/favorites-overview/favorites-overview.component';
import { GetBreedNames } from './services/getBreedNames.service';
import { GetFavorites } from './services/getFavorites.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostFavorite } from './services/postFavorite.service';
import { RandomCatComponent } from './components/random-cat/random-cat.component';
import { SearchBreedByName } from './services/searchBreedByName.service';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    BreedOverviewComponent,
    ButtonComponent,
    CatImageComponent,
    ContainerComponent,
    FavoritesOverviewComponent,
    NavbarComponent,
    RandomCatComponent,
    ToastComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    DeleteFavorite,
    GetBreedNames,
    GetFavorites,
    GetRandomCat,
    PostFavorite,
    SearchBreedByName,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
