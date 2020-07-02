import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TULBackgroundComponent } from './the-undying-light/background/background.component';
import { TULLocationsComponent } from './the-undying-light/locations/locations.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TULSalariesAndExpensesComponent } from './the-undying-light/salaries-and-expenses/salaries-and-expenses.component';
import { HelixPBPBackgroundComponent } from './helix-pbp/background/background.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { CharacterComponent } from './characters/character.component';
import { FerroBackgroundComponent } from './ferro-outpost/background/background.component';
import { FerroLocationsComponent } from './ferro-outpost/locations/locations.component';
import { HelixPBPLocationsComponent } from './helix-pbp/locations/locations.component';

const routes: Routes = [
  { path: 'the-undying-light', children: [
    { path: 'background', component: TULBackgroundComponent },
    { path: 'locations', component: TULLocationsComponent },
    { path: 'characters', children: [
      { path: 'pc', component: CharacterComponent },
      { path: 'npc', component: CharacterComponent },
    ] },
    { path: 'salaries-and-expenses', component: TULSalariesAndExpensesComponent },
  ] },
  { path: 'helix-pbp', children: [
    { path: 'background', component: HelixPBPBackgroundComponent },
    { path: 'locations', component: HelixPBPLocationsComponent },
    { path: 'characters', children: [
      { path: 'pc', component: CharacterComponent },
      { path: 'npc', component: UnderConstructionComponent },
    ] },
    { path: 'salaries-and-expenses', component: UnderConstructionComponent },
  ] },
  { path: 'luna-umbra', children: [
    { path: 'background', component: UnderConstructionComponent },
    { path: 'locations', component: UnderConstructionComponent },
    { path: 'characters', children: [
      { path: 'pc', component: UnderConstructionComponent },
      { path: 'npc', component: UnderConstructionComponent },
    ] },
  ] },
  { path: 'ferro-outpost', children: [
    { path: 'background', component: FerroBackgroundComponent },
    { path: 'locations', component: FerroLocationsComponent },
    { path: 'characters', children: [
      { path: 'pc', component: CharacterComponent },
      { path: 'npc', component: CharacterComponent },
    ] },
  ] },
  { path: '404', component: NotFoundComponent },
  { path: '', component: CampaignsComponent },
  { path: '**', redirectTo: '404' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
