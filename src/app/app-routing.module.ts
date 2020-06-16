import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TULBackgroundComponent } from './the-undying-light/background/background.component';
import { TULLocationsComponent } from './the-undying-light/locations/locations.component';
import { TULPcComponent } from './the-undying-light/pc/pc.component';
import { TULNpcComponent } from './the-undying-light/npc/npc.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TULSalariesAndExpensesComponent } from './the-undying-light/salaries-and-expenses/salaries-and-expenses.component';
import { HPBPBackgroundComponent } from './helix-pbp/background/background.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

const routes: Routes = [
  { path: 'the-undying-light', children: [
    { path: 'background', component: TULBackgroundComponent },
    { path: 'locations', component: TULLocationsComponent },
    { path: 'characters', children: [
      { path: 'pc', component: TULPcComponent },
      { path: 'npc', component: TULNpcComponent },
    ] },
    { path: 'salaries-and-expenses', component: TULSalariesAndExpensesComponent },
  ] },
  { path: 'helix-pbp', children: [
    { path: 'background', component: UnderConstructionComponent },
    { path: 'locations', component: UnderConstructionComponent },
    { path: 'characters', children: [
      { path: 'pc', component: UnderConstructionComponent },
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
    { path: 'salaries-and-expenses', component: UnderConstructionComponent },
  ] },
  { path: '404', component: NotFoundComponent },
  { path: '', component: CampaignsComponent },
  { path: '**', redirectTo: '404' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
