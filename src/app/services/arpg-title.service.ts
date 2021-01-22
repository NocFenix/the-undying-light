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
        break;
      case 'Helix Play-by-Post':
        title = 'helix-pbp';
        break;
      case 'Luna Umbra':
        title = 'luna-umbra';
        break;
      case 'Ferro Outpost':
        title = 'ferro-outpost';
        break;
      case 'Dark Edge of Space':
        title = 'dark-edge';
        break;
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
        break;
      case 'dark-edge':
        title = 'Dark Edge of Space';
        // if (page)
        //   title += ` | ${page}`;
        break;
      default:
        title = campaign;
        break;
    }
    this.titleService.setTitle(title);
  }

}
