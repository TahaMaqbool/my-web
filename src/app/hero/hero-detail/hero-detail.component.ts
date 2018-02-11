import {Component, Input, OnInit} from '@angular/core';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
@Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  saveHero(): void {
    const formData = {
      name: this.hero.name
    };
    this.heroService.updateHero(formData, this.hero.id)
      .subscribe(
        hero => this.hero = hero
      );
  }

  goBack(): void {
    this.location.back();
  }
}
