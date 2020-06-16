import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tul-salaries-and-expenses',
  templateUrl: './salaries-and-expenses.component.html',
  styleUrls: ['./salaries-and-expenses.component.less']
})
export class TULSalariesAndExpensesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  public showSalaries: boolean = true;
  public toggleShowSalaries() {
    this.showSalaries = !this.showSalaries;
  }

  public showHousing: boolean = false;
  public toggleShowHousing() {
    this.showHousing = !this.showHousing;
  }

  public showFoodPlans: boolean = false;
  public toggleShowFoodPlans() {
    this.showFoodPlans = !this.showFoodPlans;
  }

}
