import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');

//services
import { MovieService } from './services/movie.service';
import { NotificationService } from './services/notification.service';
import { RequestInterceptor } from './services/request.interceptor';

//translate
//translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}

//libs
import { AngularSvgIconModule } from 'angular-svg-icon';

//pipes
import { DateProxyPipe } from './pipes/date-proxy.pipe';
import { CurrencyProxyPipe } from './pipes/currency-proxy.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// others
import { ApplicationErrorHandler } from './app.error-handler';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { GeneralMovieComponent } from './pages/home/general-movie/general-movie.component';
import { FavoriteDetailComponent } from './pages/favorites/favorite-detail/favorite-detail.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchDetailComponent } from './pages/search/search-detail/search-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyProxyPipe,
    DateProxyPipe,
    NotFoundComponent,
    HeaderComponent,
    HomeComponent,
    MovieComponent,
    MovieDetailComponent,
    FavoritesComponent,
    SnackbarComponent,
    GeneralMovieComponent,
    FavoriteDetailComponent,
    SearchComponent,
    SearchDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularSvgIconModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    MovieService,
    NotificationService,
    {provide: LOCALE_ID, useValue: 'es'},
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
    {provide: ErrorHandler, useClass: ApplicationErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
