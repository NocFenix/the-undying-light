import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hpbp-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.less']
})
export class HelixPBPLocationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  public showGravesLanding:boolean = false;
  public toggleGravesLanding() {
    this.showGravesLanding = !this.showGravesLanding;
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
