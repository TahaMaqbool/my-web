import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HeroService} from '../hero.service';
import { Router } from '@angular/router';
import {HeroesComponent} from '../heroes/heroes.component';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.css']
})
export class HeroCreateComponent implements OnInit {
  hero: Hero;
  submitted = false;

  constructor(private heroService: HeroService, private router: Router) {
    this.hero = new Hero();
  }

  ngOnInit() {
  }

  addHero(form): void {
    this.submitted = true;
    const heroForm = this.hero.formatRequest();
    this.heroService.addHero(heroForm)
      .subscribe(
        hero => this.hero = hero
      );
    this.router.navigate(['/heroes']);
  }
}
