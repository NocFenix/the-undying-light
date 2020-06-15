import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BackgroundComponent } from './background/background.component';
import { LocationsComponent } from './locations/locations.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      BackgroundComponent,
      LocationsComponent,
      NotFoundComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
