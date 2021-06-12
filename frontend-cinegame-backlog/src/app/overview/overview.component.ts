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

  public items: GenericItemType[] = [];


  type: string;
  options = [MovieState.TO_WATCH, MovieState.WATCHED, MovieState.FINISHED, MovieState.ABOUT_TO_START];
  isAddMovieEnabled = false;
  isEditMovieEnabled = false;
  isOverviewMovieEnabled = true;
  state: MovieState = MovieState.TO_WATCH;
  rating: number;
  name: string;
  id: number;
  gamesProgress: number;
  maxSeason: number;
  maxEpisode: number;
  currSeason: number;
  currEpisode: number;


  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.items.forEach((movie) => console.log(movie.name));
    this.activatedRoute.paramMap.subscribe(param => {
      this.type = param.get('type');
      console.log(this.type);
      switch (this.type) {
        case 'game':
          this.items = GameType.parse(jsonGames);
          break;
        case 'movie':
          this.items = MovieType.parse(jsonMovies);
          break;
        case 'series':
          this.items = SerieType.parse(jsonSeries);
          break;
        default:
          this.type = 'movie';
          this.items = MovieType.parse(jsonMovies);
      }
    })
  }

  onDelete(item): void {
    const index = this.items.indexOf(item, 0);
    this.items.splice(index, 1);
  }

  onAdd(): void {

    if (this.type === 'movie') {
      if (this.name.length) {
        this.items.push(new MovieType(this.generateID(), this.name, this.rating, null, this.state));
        this.name = '';
        this.state = MovieState.TO_WATCH;
        this.rating = 1;
      }
    }

    if (this.type === 'series') {
      if (this.name.length) {
        this.items.push(new SerieType(this.generateID(), this.name, this.rating, this.maxSeason, this.maxEpisode, this.currSeason, this.currEpisode));
        this.name = '';
        this.rating = 1;
        this.maxSeason = null;
        this.maxEpisode = null;
        this.currSeason = null;
        this.currEpisode = null;
      }
    }

    if (this.type === 'game') {
      if (this.name.length) {
        this.items.push(new GameType(this.generateID(), this.name, this.rating, null, this.gamesProgress));
        this.name = '';
        this.rating = 1;
        this.gamesProgress = null;
      }
    }

    this.isAddMovieEnabled = false;
    this.isEditMovieEnabled = false;
    this.isOverviewMovieEnabled = true;

  }

  onEdit(): void {
    if (this.type === 'movie') {
      if (this.name.length) {
        this.items[this.id] = new MovieType(this.id, this.name, this.rating, null, this.state);
      }
    }
    if (this.type === 'series') {
      if (this.name.length) {
        this.items[this.id] = new SerieType(this.id, this.name, this.rating, this.maxSeason, this.maxEpisode, this.currSeason, this.currEpisode);
      }
    }
    if (this.type === 'game') {
      if (this.name.length) {
        this.items[this.id] = new GameType(this.id, this.name, this.rating, null, this.gamesProgress);
      }
    }

    this.isAddMovieEnabled = false;
    this.isAddMovieEnabled = false;
    this.isEditMovieEnabled = false;
    this.isOverviewMovieEnabled = true;
  }

  toggleType(): void {
    this.isAddMovieEnabled = true;
    this.isEditMovieEnabled = false;
    this.isOverviewMovieEnabled = false;
  }

  editType(item): void {

    if (this.type === 'movie') {
      this.id = item.id;
      this.name = item.name;
      this.state = item.state;
      this.rating = item.rating;
    }

    if (this.type === 'series') {
      this.id = item.id;
      this.name = item.name;
      this.rating = item.rating;
      this.maxSeason = item.maxSeason;
      this.maxEpisode = item.maxEpisode;
      this.currSeason = item.currSeason;
      this.currEpisode = item.currEpisode;
    }

    if (this.type === 'game') {
      this.id = item.id;
      this.name = item.name;
      this.rating = item.rating;
      this.gamesProgress = item.gamesProgress;
    }

    this.isAddMovieEnabled = false;
    this.isEditMovieEnabled = true;
    this.isOverviewMovieEnabled = false;
  }

  generateID(): number {
    return this.items.length;
  }
}
