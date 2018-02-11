import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class HeroService {

  heroes: Hero[];

  constructor(private http: HttpClient) {
  }

  addHero(heroForm: any): Observable<any> {
    const url = environment.API_URL + 'heroes/';
    return this.http.post(url, heroForm);
  }

  updateHero(heroForm: any, id: number): Observable<any> {
    const url = environment.API_URL + 'heroes/' + id + '/';
    return this.http.put(url, heroForm);
  }

  getHeroes(): Observable<Hero[]> {
    const url = environment.API_URL + 'heroes/';
    return this.http.get<Hero[]>(url);
     // return of(this.heroes);
  }

  getHero(id: number): Observable<Hero> {
    const url = environment.API_URL + 'heroes/' + id;
    return this.http.get<Hero>(url);
    // return of(HEROES.find(hero => hero.id === id));
  }
}
