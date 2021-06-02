import {GenericItemType} from './generic-item.type';

export class MovieType extends GenericItemType {
  dateWatched: Date;
  state: MovieState;

  constructor(name: string, rating: number, dateWatched: Date, state: MovieState) {
    super(name, rating);
    this.dateWatched = dateWatched;
    this.state = state;
  }

  static parse(jsonMovies: any[]) {
    let movieTypes: MovieType[] = []

    jsonMovies.forEach(movie => {
      movieTypes.push(new MovieType(movie.name, movie.rating, new Date(movie.dateWatched), movie.state))
    })

    console.log(movieTypes)

    return movieTypes;

  }

}

export enum MovieState {
  TO_WATCH = 'TO_WATCH',
  WATCHED = 'WATCHED',
  FINISHED = 'FINISHED',
  ABOUT_TO_START = 'ABOUT_TO_START'
}
