import {GenericItemType} from './generic-item.type';

export class MovieType extends GenericItemType {
  dateWatched: Date;
  state: MovieState;

  constructor(name: string, rating: number, dateWatched: Date, state: MovieState) {
    super(name, rating);
    this.dateWatched = dateWatched;
    this.state = state;
  }
}

export enum MovieState {
  TO_WATCH = 'TO_WATCH',
  WATCHED = 'WATCHED',
  FINISHED = 'FINISHED',
  ABOUT_TO_START = 'ABOUT_TO_START'
}
