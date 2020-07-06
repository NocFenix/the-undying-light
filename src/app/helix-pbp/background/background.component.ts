import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hpbp-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.less']
})
export class HelixPBPBackgroundComponent implements OnInit {

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
