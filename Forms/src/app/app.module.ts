import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TwoWayBindingService } from './two-way-binding/two-way-binding.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TwoWayBindingService],
  bootstrap: [TwoWayBindingComponent]
})
export class AppModule { }
