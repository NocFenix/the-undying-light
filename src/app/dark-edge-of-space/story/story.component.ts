import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { StoryChoiceService } from 'src/app/services/story-choice.service';
import { StoryChoice } from '../models';

@Component({
  selector: 'des-background',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.less']
})
export class DarkEdgeStoryComponent implements OnInit {

  constructor(
    private cookieSvc:CookieService,
    private choiceSvc:StoryChoiceService
  ) { }

  ngOnInit() {
    this.updateOptionsFromCookies();
  }

  public showCookieNotice: boolean = true;
  toggleShowCookieNotice():void {
    this.showCookieNotice = !this.showCookieNotice;
    this.cookieSvc.set('show-cookie-notice',this.showCookieNotice ? 'true':'false');
  }

  public showIntro: boolean = true;
  toggleShowIntro():void {
    this.showIntro = !this.showIntro;
    this.cookieSvc.set('show-intro',this.showIntro ? 'true':'false');
  }

  public toggleNextChapter(chapter:number):void {
    switch(chapter) {
      case 1:
        this.showChapterOne = true;
        this.cookieSvc.set('show-chapter-one','true');
        this.showPrologue = false;
        this.cookieSvc.set('show-prologue','false');
        break;
      case 2:
        this.showChapterTwo = true;
        this.cookieSvc.set('show-chapter-two','true');
        this.showChapterOne = false;
        this.cookieSvc.set('show-chapter-one','false');
        this.showPrologue = false;
        this.cookieSvc.set('show-prologue','false');
        break;
      default:
        break;
    }
  }

  public storyStarted: boolean = false;
  public showPrologue: boolean = false;
  public showChapterOne: boolean = false;
  public showChapterTwo: boolean = false;
  toggleShowSection(chapter:number):void {
    switch(chapter) {
      case 0:
        this.showPrologue = !this.showPrologue;
        this.cookieSvc.set('show-prologue',this.showPrologue ? 'true':'false');
        break;
      case 1:
        this.showChapterOne = !this.showChapterOne;
        this.cookieSvc.set('show-chapter-one',this.showChapterOne ? 'true':'false');
        break;
      case 2:
        this.showChapterTwo = !this.showChapterTwo;
        this.cookieSvc.set('show-chapter-two',this.showChapterTwo ? 'true':'false');
        break;
    }

    if (!this.storyStarted && (this.showPrologue || this.showChapterOne || this.showChapterTwo))
      this.storyStarted = true;
  }

  public isJern:boolean = false;
  public characterName:string;
  public characterGender:string;

  public siblingName:string;
  public siblingGender:string;

  setCharacter(name:string):void {
    this.characterName = name;
    this.isJern = this.characterName === 'Jern';
    this.characterGender = this.isJern ? 'm' : 'f';
    this.cookieSvc.set('character-is-jern',this.isJern ? 'true':'false');

    this.siblingName = this.characterName === 'Yessa' ? 'Jern' : 'Yessa';
    this.siblingGender = this.characterName === 'Yessa' ? 'm' : 'f';
    this.baseChoices = this.choiceSvc.getChoices(this.isJern);
  }

  public baseChoices:StoryChoice[];

  setChoice(choiceNumber:number, choiceValue:number):void {
    this.baseChoices.find(x => x.Choice == choiceNumber).IsSet = true;
    this.baseChoices.find(x => x.Choice == choiceNumber).OptionSet = choiceValue;

    const choiceName = `${(this.isJern ? "jern" : "yessa")}-choice-${choiceNumber}`;
    this.cookieSvc.set(choiceName, `${choiceValue}`);
  }

  restartStory():void {
    this.characterName = null;
    this.characterGender = null;

    this.siblingName = null;
    this.siblingGender = null;

    this.deleteStoryCookies();
    this.deleteChoiceCookies();
  }

  private deleteStoryCookies():void {
    this.cookieSvc.delete('character-is-jern');

    this.showIntro = false;
    this.cookieSvc.set('show-intro','false');
    this.showPrologue = true;
    this.cookieSvc.set('show-prologue','true');
    this.showChapterOne = false;
    this.cookieSvc.set('show-chapter-one','false');
  }

  private updateOptionsFromCookies():void {
    this.showCookieNotice = (this.cookieSvc.get('show-cookie-notice') == 'true' || this.cookieSvc.get('show-cookie-notice') == '');
    this.showIntro = (this.cookieSvc.get('show-intro') == 'true' || this.cookieSvc.get('show-intro') == '');
    this.showPrologue = (this.cookieSvc.get('show-prologue') == 'true');
    this.showChapterOne = (this.cookieSvc.get('show-chapter-one') == 'true');
    this.storyStarted = (this.showPrologue || this.showChapterOne || this.showChapterTwo);

    const isJernCookie = this.cookieSvc.get('character-is-jern');
    if (isJernCookie && isJernCookie.length > 0) {
      this.isJern = (isJernCookie == 'true');
      this.characterName = this.isJern ? 'Jern' : 'Yessa';
      this.characterGender = this.isJern ? 'm' : 'f';
  
      this.siblingName = this.isJern ? 'Yessa' : 'Jern';
      this.siblingGender = this.isJern ? 'f' : 'm';  

      this.baseChoices = this.choiceSvc.getChoices(this.isJern);
      this.baseChoices.forEach(x => {
        this.updateChoiceFromCookie(x);
      });
    }
    else {
      this.isJern = null;

      this.characterName = null;
      this.characterGender = null;
  
      this.siblingName = null;
      this.siblingGender = null;
      if (this.baseChoices) {
        this.baseChoices.forEach(x => {
          x.IsSet = false;
          x.OptionSet = null;
        });
      }
    }
  }
  
  private updateChoiceFromCookie(choice:StoryChoice):void {
    const cookieName = `${(this.isJern ? "jern" : "yessa")}-choice-`;
    let choiceCookie = this.cookieSvc.get(`${cookieName}${choice.Choice}`);
    if (choiceCookie && choiceCookie.length > 0) {
      choice.IsSet = true;
      choice.OptionSet = +choiceCookie;
    }
  }

  private deleteChoiceCookies():void {
    const cookieName = `${(this.isJern ? "jern" : "yessa")}-choice-`;
    this.baseChoices.forEach(x => {
      x.IsSet = false;
      x.OptionSet = null;
      this.cookieSvc.delete(`${cookieName}${x.Choice}`)
    });
  }

}
