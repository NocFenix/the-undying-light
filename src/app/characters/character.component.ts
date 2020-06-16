import { Component, OnInit, Input } from '@angular/core';
import { CharacterModel } from 'src/app/models';
import { CharacterService } from 'src/app/services/character.service';
import { Router, UrlTree, UrlSegmentGroup, UrlSegment, PRIMARY_OUTLET } from '@angular/router';
import { ArpgTitleService } from '../services/arpg-title.service';

@Component({
  selector: 'arpg-characters',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.less']
})
export class CharacterComponent implements OnInit {

  public characterType: string = "Player";
  public isPC: boolean;
  public campaign: string;
  public characters: CharacterModel[];

  constructor (
    private router: Router,
    private titleSvc: ArpgTitleService,
    private characterSvc: CharacterService
  ) {
    const tree: UrlTree = router.parseUrl(router.url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    this.campaign = s[0].path;
    this.isPC = (s[2].path == 'pc');
    this.characterType = this.isPC ? 'Player' : 'Non-Player'
  }

  ngOnInit() {
    this.characters = this.characterSvc.getCharacters(this.campaign, this.isPC);
    this.titleSvc.setTitle(this.campaign, `${this.characterType} Characters`)
  }

}
