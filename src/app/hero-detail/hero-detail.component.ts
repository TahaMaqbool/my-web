import {Component, Input, OnInit} from '@angular/core';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../user';

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
//    console.log('hero is: ', this.hero);
  }

  goBack(): void {
    this.location.back();
  }

  apiGetCall(): void {
    this.http.get<User>('https://api.github.com/users/seeschweiler')
      .subscribe(
        data => {
          console.log(data.login);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('client side error occured');
          } else {
          console.log('Error occured.');
          }
        }
      );
  }

  apiPostCall(): void {
    this.http.post('http://jsonplaceholder.typicode.com/posts', {title: 'testing', body: 'this is body', userId: 122})
      .subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log('Error occured.');
         }
      );
  }
}
