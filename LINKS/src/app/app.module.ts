import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HOMEComponent } from './home/home.component';
import { OurWebsiteComponent } from './our-website/our-website.component';
import { W3WebsiteComponent } from './w3-website/w3-website.component';
import { GoogleComponent } from './google/google.component';
import { CromeComponent } from './crome/crome.component';
import { MapsComponent } from './maps/maps.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HOMEComponent,
    OurWebsiteComponent,
    W3WebsiteComponent,
    GoogleComponent,
    CromeComponent,
    MapsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
