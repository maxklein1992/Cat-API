import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BreedOverviewComponent } from './components/breed-overview/breed-overview.component';
import { ButtonComponent } from './UI/button/button.component';
import { CatImageComponent } from './components/cat-image/cat-image.component';
import { ContainerComponent } from './UI/container/container.component';
import {
  DeleteFavorite,
  GetBreedNames,
  GetFavorites,
  PostFavorite,
  GetRandomCat,
  SearchBreedByName,
} from './services';
import { FavoritesOverviewComponent } from './components/favorites-overview/favorites-overview.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RandomCatComponent } from './components/random-cat/random-cat.component';
import { ToastComponent } from './components/toast/toast.component';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
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
