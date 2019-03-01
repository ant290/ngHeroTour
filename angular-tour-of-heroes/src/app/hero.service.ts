import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

//pull in the hero classes
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

//pull in other services
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //add the MessageService property in the constructor ... this includes DI  
  constructor(private messageService: MessageService) { }

  //method to return the list of heroes
  //this returns an RxJS observable of type Hero[]
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message __after__ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  //method to return the single hero based on the passed in id
  getHero(id): Observable<Hero>{
    // TODO: send the message __after__ fetching the hero
    //note: the backticks ` are used to define a javascript template literal for embedding the ID
    //this works the same as string interpolation in c#
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id ===id));
  }
}
