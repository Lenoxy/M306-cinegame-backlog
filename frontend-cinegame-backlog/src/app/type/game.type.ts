import {GenericItemType} from "./generic-item.type";

export class GameType extends GenericItemType {

  dateWatched: Date;
  progress: number;

  constructor(name: string, rating: number, dateWatched: Date, progress: number) {
    super(name, rating);
    this.dateWatched = dateWatched;
    this.progress = progress;
  }


  static parse(jsonGames: any[]): GameType[] {
    let gameType: GameType[] = [];

    jsonGames.forEach((game) => {
        gameType.push(
          new GameType(game.name, game.rating, new Date(game.dateWatched), game.progress)
        )
      }
    )

    return gameType;
  }

}
