import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { TULBackgroundComponent } from './the-undying-light/background/background.component';
import { TULLocationsComponent } from './the-undying-light/locations/locations.component';
import { TULSalariesAndExpensesComponent } from './the-undying-light/salaries-and-expenses/salaries-and-expenses.component';
import { HelixPBPBackgroundComponent } from './helix-pbp/background/background.component';
import { HelixPBPLocationsComponent } from './helix-pbp/locations/locations.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { CharacterComponent } from './characters/character.component';
import { CharacterService } from './services/character.service';
import { FerroBackgroundComponent } from './ferro-outpost/background/background.component';
import { FerroLocationsComponent } from './ferro-outpost/locations/locations.component';

@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      NotFoundComponent,
      CampaignsComponent,
      CharacterComponent,
      TULBackgroundComponent,
      TULLocationsComponent,
      TULSalariesAndExpensesComponent,
      HelixPBPBackgroundComponent,
      HelixPBPLocationsComponent,
      UnderConstructionComponent,
      FerroBackgroundComponent,
      FerroLocationsComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
   ],
   providers: [ CharacterService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
