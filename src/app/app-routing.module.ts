import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './hero/heroes/heroes.component';
import {DashboardComponent} from './hero/dashboard/dashboard.component';
import {HeroDetailComponent} from './hero/hero-detail/hero-detail.component';
import { HeroCreateComponent } from './hero/hero-create/hero-create.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'create', component: HeroCreateComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
