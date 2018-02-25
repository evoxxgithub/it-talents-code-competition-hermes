import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  private _locations: string[] = [
    'München',
    'Köln',
    'Hamburg',
    'Essen',
    'Dortmund',
    'Kleve',
    'Osnabrück',
    'Bremen',
    'Saarbrücken',
    'Berlin',
    'Aachen',
    'Stuttgart',
    'Bonn'
  ];
  private _newItem = '';
  private _showWarning = false;
  private _warningText = 'You entered an invalid Location name';
  private _selectedItem: string;

  constructor() { }


  get locations(): string[] {
    return this._locations;
  }

  get newItem(): string {
    return this._newItem;
  }

  get showWarning(): boolean {
    return this._showWarning;
  }

  get warningText(): string {
    return this._warningText;
  }

  get selectedItem(): string {
    return this._selectedItem;
  }

  ngOnInit() {
    this._selectedItem = this.locations[0];
  }

  public removeItem(index: number): void {
    this._locations.splice(index, 1);
  }
  public addNewItem(): void {
    if ( this._newItem === '') {
      this._showWarning = true;
      setTimeout(() => {
        this._showWarning = false;
      }, 1600);
    } else {
      this._locations.push(this._newItem);
      this._newItem = '';
    }

  }
  public selectItem(index: number): void {
    this._selectedItem = this._locations[index];
  }
}
