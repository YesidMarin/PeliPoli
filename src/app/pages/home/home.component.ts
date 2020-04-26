import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private movieService: MovieService, private translate: TranslateService) { }

  title: string
  movies: []
  state: number = 1
  isEnd: boolean = false

  ngOnInit() {

    this.getPopular()

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if(this.state == 1){
        this.getPopular()
      } else if(this.state == 2){
        this.getUpComing()
      } else if(this.state == 3){
        this.getTopRated()
      }
    });
  }

  getPopular(){
    this.movieService.getPopularMovie().subscribe(data => {
      this.movies = data.results;
      this.title = this.translate.instant('home.subtitlePopular')
      this.state = 1
    });
  }

  getUpComing(){
    this.movieService.getUpComing().subscribe(data => {
      this.movies = data.results;
      this.title = this.translate.instant('home.subtitleUpcoming')
      this.state = 2
    });
  }

  getTopRated(){
    this.movieService.getTopRated().subscribe(data => {
      this.movies = data.results;
      this.title = this.translate.instant('home.subtitleTop')
      this.state = 3
    });
  }

  changeMovie(){
    if (this.state == 1) {
      this.getUpComing()
    }
    if (this.state == 2) {
      this.getTopRated()
    }
    if (this.state == 3) {
      this.getPopular()
    }
  }
}
