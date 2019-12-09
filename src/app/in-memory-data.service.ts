import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'Superman'},
      {id: 12, name: 'Spiderman'},
      {id: 13, name: 'Wolverine'},
      {id: 14, name: 'Beast'},
      {id: 15, name: 'Gambet'},
      {id: 16, name: 'Batman'},
      {id: 17, name: 'Wonderwoman'},
      {id: 18, name: 'Hulk'},
      {id: 19, name: 'Ironman'},
      {id: 20, name: 'Thor'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
