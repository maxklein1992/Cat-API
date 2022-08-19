import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreedOverviewComponent } from './components/breed-overview/breed-overview.component';
import { FavoritesOverviewComponent } from './components/favorites-overview/favorites-overview.component';
import { RandomCatComponent } from './components/random-cat/random-cat.component';

const routes: Routes = [
  {
    path: 'cat',
    component: RandomCatComponent,
  },
  {
    path: '',
    component: RandomCatComponent,
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
