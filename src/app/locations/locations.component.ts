import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tul-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.less']
})
export class LocationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  public showOverview:boolean = false;
  public toggleOverview() {
    this.showOverview = !this.showOverview;
  }

  public showDetailedOverview:boolean = false;
  public toggleDetailedOverview() {
    this.showDetailedOverview = !this.showDetailedOverview;
  }

  public showAdminBuilding:boolean = false;
  public toggleAdminBuilding() {
    this.showAdminBuilding = !this.showAdminBuilding;
  }

  public showEntertainmentBuilding:boolean = false;
  public toggleEntertainmentBuilding() {
    this.showEntertainmentBuilding = !this.showEntertainmentBuilding;
  }

  public showGreenhouse:boolean = false;
  public toggleGreenhouse() {
    this.showGreenhouse = !this.showGreenhouse;
  }

  public showHousingBuilding:boolean = false;
  public toggleHousingBuilding() {
    this.showHousingBuilding = !this.showHousingBuilding;
  }

  public showShops:boolean = false;
  public toggleShops() {
    this.showShops = !this.showShops;
  }

}
