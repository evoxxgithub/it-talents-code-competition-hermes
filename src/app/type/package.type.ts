import { Location } from './location.type';

export class Package {
  private _stations: Location[];
  private TIME_BETWEEN_STATIONS = 4000;
  private _currentStation: Location;

  constructor(stations: Location[]) {
    this._stations = stations;
    this._currentStation = this.stations[0];
  }

  public get currentStation(): Location {
    return this._currentStation;
  }

  public get stations(): Location[] {
    return this._stations;
  }

  public addStation(station: Location): void {
    this.stations.push(station);
  }

  public transport(): void {
    this.transportToNextStation();
  }

  private transportToNextStation(): void {
    setTimeout(() => {
      console.log('Package has moved to Station ' + this.currentStation.name);
      this.transportToNextStation();
    }, this.TIME_BETWEEN_STATIONS);
  }
}
