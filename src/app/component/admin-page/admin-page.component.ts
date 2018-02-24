import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  public locations: string[] = [
    'München',
    'Köln',
    'Hamburg',
  ];
  public newItem = '';
  public showWarning = false;
  public warningText = 'You entered an invalid Location name';
  public selectedItem = this.locations[2];

  constructor() { }

  ngOnInit() {
  }
  removeItem(index: number): void {
    this.locations.splice(index, 1);
  }
  addNewItem(): void {
    if ( this.newItem === '') {
      this.showWarning = true;
      setTimeout(() => {
        this.showWarning = false;
      }, 1600);
    } else {
      this.locations.push(this.newItem);
      this.newItem = '';
    }

  }
  selectItem(index: number): void {
    this.selectedItem = this.locations[index];
  }

}
