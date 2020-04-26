import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favorite-detail',
  templateUrl: './favorite-detail.component.html'
})
export class FavoriteDetailComponent implements OnInit {

  detail: {}

  constructor(private movieService: MovieService, 
    private route: ActivatedRoute,
    private translate: TranslateService) { }
    
  ngOnInit() {
    this.getDetail()

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.detail = {}
      this.getDetail()
    });
  }

  getDetail(){
    this.movieService.getMovieDetail(this.route.snapshot.params['id']).subscribe(data => {
      this.detail = data;
    });
  }

}
