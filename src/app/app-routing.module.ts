import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FavoriteDetailComponent } from './pages/favorites/favorite-detail/favorite-detail.component';
import { GeneralMovieComponent } from './pages/home/general-movie/general-movie.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchDetailComponent } from './pages/search/search-detail/search-detail.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'favorites/movie-detail/:id', component: FavoriteDetailComponent},
  {path: 'movie-detail/:id', component: GeneralMovieComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'search/:text', component: SearchComponent},
  {path: 'search/:text/movie-detail/:id', component: SearchDetailComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
