import {Component, OnInit} from '@angular/core';
import {MovieType} from '../type/movie.type';
// @ts-ignore
import jsonMovies from '../../assets/data/movies.json';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public movies: MovieType[] = MovieType.parse(jsonMovies);

  constructor() {
  }

  ngOnInit(): void {

    this.movies.forEach((movie) => console.log(movie.name));
  }

}
