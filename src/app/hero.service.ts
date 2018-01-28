import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class HeroService {

  heroes: Hero[];

  constructor(private http: HttpClient) {
  }

  getHeroes(): Observable<Hero[]> {
    const url = environment.API_URL + 'heroes';
    return this.http.get<Hero[]>(url);
     // return of(this.heroes);
  }

  getHero(id: number): Observable<Hero> {
    const url = environment.API_URL + 'heroes/' + id;
    return this.http.get<Hero>(url);
    // return of(HEROES.find(hero => hero.id === id));
  }
}
