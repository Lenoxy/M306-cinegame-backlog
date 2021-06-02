import {GenericItemType} from './generic-item.type';

export class MovieType extends GenericItemType {
  dateWatched: Date;
  state: MovieState;

  constructor(name: string, rating: number, dateWatched: Date, state: MovieState) {
    super(name, rating);
    this.dateWatched = dateWatched;
    this.state = state;
  }

  public static parse(json: any[]): MovieType[] {
    let movieType: MovieType[] = [];
    json.forEach((j) => {
      movieType.push(
        new MovieType(j.name, j.rating, new Date(j.date), MovieState[j.state])
      )
    })
    return movieType;
  }

}

export enum MovieState {
  TO_WATCH = 'TO_WATCH',
  WATCHED = 'WATCHED',
  FINISHED = 'FINISHED',
  ABOUT_TO_START = 'ABOUT_TO_START'
}
