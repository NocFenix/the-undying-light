import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor() {
    
  }

  public getFormattedCampaignFromUrl(campaignUrl:string):string {
    switch (campaignUrl) {
      case 'the-undying-light':
          return 'The Undying Light';
      case 'helix-pbp':
        return 'Helix Play-by-Post';
      case 'luna-umbra':
        return 'Luna Umbra';
      default:
        return null;
    }
  }

}
