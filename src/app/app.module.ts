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
import { HPBPBackgroundComponent } from './helix-pbp/background/background.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      NotFoundComponent,
      CampaignsComponent,
      TULBackgroundComponent,
      TULLocationsComponent,
      TULSalariesAndExpensesComponent,
      HPBPBackgroundComponent,
      UnderConstructionComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
