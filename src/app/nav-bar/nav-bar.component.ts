import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'tul-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {

  constructor(private titleService: Title) { }

  public campaignName: string;
  public campaignRoute: string;

  ngOnInit() {
    this.titleService.setTitle("NocFenix's Campaigns");
  }

  public setTitle(route:string) {
    this.titleService.setTitle(`${this.campaignName} | ${route}`);
  }

  public setCampaign(campaignName:string) {
    switch (campaignName) {
      case 'tul':
        this.campaignName = 'The Undying Light';
        this.campaignRoute = 'the-undying-light';
        break;
      case 'hpbp':
        this.campaignName = 'Helix Play-by-Post';
        this.campaignRoute = 'helix-pbp';
        break;
      case 'lu':
        this.campaignName = "Luna Umbra";
        this.campaignRoute = 'luna-umbra';
        break;
      default:
        this.campaignName = 'Home';
        this.campaignRoute = '';
        break;
    }
    this.titleService.setTitle(this.campaignName);
  }

}
