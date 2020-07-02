import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ArpgTitleService {

  constructor(
    private titleService: Title
  ) { }

  public getCampaignUrlFromTitle() {
    var title = this.titleService.getTitle();
    var titleSegments = title.split(' | ');
    switch (titleSegments[0]) {
      case 'The Undying Light':
        title = 'the-undying-light';
      case 'Helix Play-by-Post':
        title = 'helix-pbp';
      case 'Luna Umbra':
        return 'luna-umbra';
      case 'Ferro Outpost':
          return 'ferro-outpost';
      default:
        break;
    }
  }

  public setTitle(campaign:string, page?:string) {
    var title:string = '';
    switch (campaign) {
      case 'the-undying-light':
        title = 'The Undying Light';
        if (page)
          title += ` | ${page}`;
        break;
      case 'helix-pbp':
        title = 'Helix Play-by-Post';
        if (page)
          title += ` | ${page}`;
        break;
      case 'luna-umbra':
        title = 'Luna Umbra';
        if (page)
          title += ` | ${page}`;
        break;
      case 'ferro-outpost':
        title = 'Ferro Outpost';
        if (page)
          title += ` | ${page}`;
      default:
        title = campaign;
        break;
    }
    this.titleService.setTitle(title);
  }

}
