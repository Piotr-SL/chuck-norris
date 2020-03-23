import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageJokesComponent } from './components/page-jokes/page-jokes.component';

//I need to teach Angular about http requests
import { HttpClientModule } from "@angular/common/http";
import { PageLangComponent } from './components/page-lang/page-lang.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PageJokesComponent,
    PageLangComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
