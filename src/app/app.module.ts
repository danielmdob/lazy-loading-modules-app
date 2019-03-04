import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationRoutingModule } from './features/authentication/authentication-routing.module';
import { ResolverTestModule } from './features/resolver-test/resolver-test.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationRoutingModule,
    ResolverTestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
