import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'superman'},
      {id: 12, name: 'spiderman'},
      {id: 13, name: 'wolverine'},
      {id: 14, name: 'beast'},
      {id: 15, name: 'gambet'},
      {id: 16, name: 'batman'},
      {id: 17, name: 'wonderwoman'},
      {id: 18, name: 'hulk'},
      {id: 19, name: 'ironman'},
      {id: 20, name: 'thor'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
