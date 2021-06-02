import {Component, OnInit} from '@angular/core';
import {MovieState, MovieType} from '../type/movie.type';
import jsonMovies from '../../assets/data/movies.json';
import jsonGames from '../../assets/data/games.json';
import {ActivatedRoute} from "@angular/router";
import {GameType} from "../type/game.type";
import {GenericItemType} from "../type/generic-item.type";
import jsonSeries from '../../assets/data/series.json';
import {SerieType} from "../type/serie.type";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public items: GenericItemType[] = []


  type: string;
  options = [MovieState.TO_WATCH, MovieState.WATCHED, MovieState.FINISHED, MovieState.ABOUT_TO_START];
  isAddMovieEnabled: boolean = false;
  state: MovieState = MovieState.TO_WATCH;
  rating: number;
  name: string;
  gamesProgress: number;
  maxSeason: number;
  maxEpisode: number;
  currSeason: number;
  currEpisode: number;


  constructor(private _ActivatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.items.forEach((movie) => console.log(movie.name));
    this._ActivatedRoute.paramMap.subscribe(param => {
      this.type = param.get('type');
      console.log(this.type)
      switch (this.type) {
        case 'games':
          this.items = GameType.parse(jsonGames)
          break;
        case 'movies':
          this.items = MovieType.parse(jsonMovies)
          break;
        case 'series':
          this.items = SerieType.parse(jsonSeries)
          break;
        default:
          this.type = 'movies';
          this.items = MovieType.parse(jsonMovies)
      }
    })
    console.log(this.items)
  }

  onDelete(item): void {
    let index = this.items.indexOf(item, 0);
    this.items.splice(index, 1);
  }

  onAdd(): void {
    if (this.name.length && this.state.length)
    {
      this.items.push(new MovieType(this.name, this.rating, null, this.state))
      this.name = ''
      this.state = MovieState.TO_WATCH;
      this.rating = 1
      this.isAddMovieEnabled = false;
    }
  }

  toggleType() {
    this.isAddMovieEnabled = !this.isAddMovieEnabled;
  }
}
