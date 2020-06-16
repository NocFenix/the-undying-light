import { Component, OnInit, Input } from '@angular/core';
import { ArpgTitleService } from '../services/arpg-title.service';
import { CampaignService } from '../services/campaign.service';

@Component({
  selector: 'tul-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {

  constructor(
    private campaignSvc: CampaignService,
    private titleSvc: ArpgTitleService,
  ) {

  }

  public campaignUrl: string;
  public campaignName: string;

  ngOnInit() {
    this.titleSvc.setTitle("Campaigns");
  }

  public setTitle(route:string) {
    this.titleSvc.setTitle(this.campaignUrl, route);
  }

  public setCampaign(campaignUrl:string) {
    this.campaignUrl = campaignUrl;
    this.campaignName = this.campaignSvc.getFormattedCampaignFromUrl(this.campaignUrl)
    this.setTitle('Background');
  }

}
