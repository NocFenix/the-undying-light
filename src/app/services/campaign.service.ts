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
        return ' | <i class="far fa-sun"></i> The Undying Light';
      case 'helix-pbp':
        return ' | <i class="fas fa-dna"></i> Helix Play-by-Post';
      case 'luna-umbra':
        return ' | <i class="fas fa-moon"></i> Luna Umbra';
      case 'ferro-outpost':
        return ' | <i class="fas fa-parachute-box"></i> Ferro Outpost (Cinematic)';
      case 'dark-edge':
        return ' | <i class="fas fa-user-astronaut"></i> Dark Edge of Space (Story)'
      default:
        return null;
    }
  }

  public getHasSalaries(campaignUrl:string):boolean {
    switch (campaignUrl) {
      case 'the-undying-light':
        return true;
      case 'helix-pbp':
        return true;
      case 'luna-umbra':
        return false;
      case 'ferro-outpost':
        return false;
      case 'dark-edge':
        return false;
      default:
        return false;
    }
  }

  public getIsStory(campaignUrl:string):boolean {
    switch (campaignUrl) {
      case 'dark-edge':
        return true;
      default:
        return false;
    }
  }

}
