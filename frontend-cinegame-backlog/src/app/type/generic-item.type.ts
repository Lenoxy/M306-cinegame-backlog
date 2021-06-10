export abstract class GenericItemType{


  constructor(id: number, name: string, rating: number) {
    this.id = id;
    this.name = name;
    this.rating = rating;
  }

  id: number;
  name: string;
  rating: number;

}
