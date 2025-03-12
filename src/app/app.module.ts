import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import {HttpClientModule} from "@angular/common/http";
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipesDetalisComponent } from './recipes-detalis/recipes-detalis.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    AboutComponent,
    NotFoundComponent,
    RecipesDetalisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
