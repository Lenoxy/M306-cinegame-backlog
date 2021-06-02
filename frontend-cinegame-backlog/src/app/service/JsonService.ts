import {MovieState, MovieType} from '../type/movie.type';
import jsonMovies from '../../assets/data/movies.json';
import {Inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class JsonService{
  public parseMovies(): MovieType[] {
    let json: any[] = jsonMovies;
    let movieType: MovieType[] = [];
    json.forEach((j) => {
      movieType.push(
        new MovieType(j.name, j.rating, new Date(j.date), MovieState[j.state])
      )
    })
    return movieType;
  }
}
