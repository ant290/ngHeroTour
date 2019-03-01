import { Component, OnInit } from '@angular/core';

//pull in the hero class from the hero file
import { Hero } from "../hero";
//pull in the service for getting heroes
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //expose the HEROES array for binding
  heroes: Hero[];

  //passing in the heroService to the constructor this defines the private property, and is the implementation for the Dependancy injection
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  //method to handle hero collection
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
