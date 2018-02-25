import { Component, OnInit } from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-transport-page',
  templateUrl: './transport-page.component.html',
  styleUrls: ['./transport-page.component.scss']
})
  export class TransportPageComponent implements OnInit {

  private _start: Location;
  private _destination: Location;
  private _displaySuccessInfo: boolean;

  constructor() { }

  ngOnInit() {
    this._displaySuccessInfo = false;
  }
  get start(): Location {
    return this._start;
  }

  get destination(): Location {
    return this._destination;
  }

  get displaySuccessInfo(): boolean {
    return this._displaySuccessInfo;
  }

  public addPackageToService(): void {
   // placeholder
  this._displaySuccessInfo = true;
  setTimeout(() => {
    this._displaySuccessInfo = false;
  });
  }

}
