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
import {
  BreedOverviewComponent,
  CatImageComponent,
  FavoritesOverviewComponent,
  NavbarComponent,
  RandomCatImageComponent,
} from './components';
import {
  DeleteFavorite,
  GetBreedNames,
  GetFavorites,
  PostFavorite,
  GetRandomCatImage,
  SearchBreedByName,
} from './services';
import { ButtonComponent, ContainerComponent, ToastComponent } from './UI';

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
    RandomCatImageComponent,
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
    GetRandomCatImage,
    PostFavorite,
    SearchBreedByName,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
