import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tul-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.less']
})
export class TULBackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public showIntro: boolean = true;
  toggleShowIntro() {
    this.showIntro = !this.showIntro;
  }

  public showStory: boolean = true;
  toggleShowStory() {
    this.showStory = !this.showStory;
  }

}
