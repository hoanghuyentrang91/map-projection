import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProjectionsComponent } from './projections/projections.component';
import { WorldMapComponent } from './world-map/world-map.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectionsComponent,
    WorldMapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
