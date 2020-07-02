import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fof-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.less']
})
export class FerroLocationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  public showSurface:boolean = false;
  public toggleSurface() {
    this.showSurface = !this.showSurface;
  }

  public showSublevelOne:boolean = false;
  public toggleSublevelOne() {
    this.showSublevelOne = !this.showSublevelOne;
  }

  public showSublevelTwo:boolean = false;
  public toggleSublevelTwo() {
    this.showSublevelTwo = !this.showSublevelTwo;
  }

  public showSublevelThree:boolean = false;
  public toggleSublevelThree() {
    this.showSublevelThree = !this.showSublevelThree;
  }

}
