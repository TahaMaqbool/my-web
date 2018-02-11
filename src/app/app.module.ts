import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './hero/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { HeroService } from './hero/hero.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './hero/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HeroCreateComponent } from './hero/hero-create/hero-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    LoaderComponent,
    HeroCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [HeroService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
