import {GenericItemType} from "./generic-item.type";

export class SerieType extends GenericItemType {

  season: number
  episode: number
  maxEpisode: number
  maxSeason: number
  currentSeason: number
  currentEpisode: number

  constructor(name: string, rating: number, maxSeason: number, maxEpisode: number, currentSeason: number, currentEpisode: number) {
    super(name, rating)
    this.maxSeason = maxSeason
    this.maxEpisode = maxEpisode
    this.currentSeason = currentSeason
    this.currentEpisode = currentEpisode
  }

  static parse(jsonSeries: any[]) {
    let seriesType: SerieType[] = []

    jsonSeries.forEach(serie => {
      seriesType.push(new SerieType(serie.name, serie.rating, serie.maxseason, serie.maxepisode, serie.progressseason, serie.progressepisode))
    })

    console.log(seriesType)

    return seriesType;

  }
}
