import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { LocationsComponent } from './locations/locations.component';
import { PcComponent } from './characters/pc/pc.component';
import { NpcComponent } from './characters/npc/npc.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'background', component: BackgroundComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'characters/pc', component: PcComponent },
  { path: 'characters/npc', component: NpcComponent },
  { path: '',   redirectTo: '/background', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page;
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
