import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CromeComponent } from './crome/crome.component';
import { GoogleComponent } from './google/google.component';
import { HOMEComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { OurWebsiteComponent } from './our-website/our-website.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { W3WebsiteComponent } from './w3-website/w3-website.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    
  },
  {
    path: 'home',
    component: HOMEComponent,
    children: [
      {
        path: 'our-website',
        component: OurWebsiteComponent,
      },
      {
        path: 'w3-website',
        component: W3WebsiteComponent,
      },
      {
        path: 'google',
        component: GoogleComponent,
      },
      {
        path:'page-not-found',
        component:PageNotFoundComponent,
      },

      {
        path: 'google',
        component: GoogleComponent,
        children: [
          {
            path: 'maps',
            component: MapsComponent,
          },
          {
            path: 'crome',
            component: CromeComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
