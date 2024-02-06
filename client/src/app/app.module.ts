import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PolicyDetailsComponent } from './Components/policy-details/policy-details.component';
import { PolicyComponent } from './Components/policy/policy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PolicyDetailsComponent,
    PolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
