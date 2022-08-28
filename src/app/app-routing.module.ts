import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  BreedOverviewComponent,
  FavoritesOverviewComponent,
  RandomCatImageComponent,
} from './components';

const routes: Routes = [
  {
    path: 'cat',
    component: RandomCatImageComponent,
  },
  {
    path: '',
    component: RandomCatImageComponent,
    pathMatch: 'full',
  },
  {
    path: 'filterByBreed',
    component: BreedOverviewComponent,
    pathMatch: 'full',
  },
  {
    path: 'favorites',
    component: FavoritesOverviewComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
