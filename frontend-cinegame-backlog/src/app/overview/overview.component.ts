import {Component, Input, OnInit} from '@angular/core';
import {MovieType} from '../type/movie.type';
import {JsonService} from '../service/JsonService';
import {ListType} from '../type/list.type';
import {ActivatedRoute} from '@angular/router';
import {GenericItemType} from '../type/generic-item.type';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public movies: GenericItemType[] = this.jsonService.parseMovies();

  private listType: ListType;

  constructor(
    private jsonService: JsonService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    let type: string = this.route.snapshot.paramMap.get('type');
    this.listType = ListType[type.toUpperCase()];
    console.log(this.listType)
    this.movies.forEach((movie) => console.log(movie.name));
  }

}
