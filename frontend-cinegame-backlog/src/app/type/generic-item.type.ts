export abstract class GenericItemType{


  constructor(name: string, rating: number) {
    this.name = name;
    this.rating = rating;
  }

  name: string;
  rating: number;

}
