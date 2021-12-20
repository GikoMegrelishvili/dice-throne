import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public selectedHero:string = "Monk";
  public heroes = [
    'Artificer',
    'Barbarian',
    'Cursed Pirate',
    'Gunslinger',
    'Huntress',
    'Monk',
    'Moon-Elf',
    'Ninja',
    'Paladin',
    'Pyromancer',
    'Samurai',
    'Seraph',
    'Shadow-Thief',
    'Tactician',
    'Treant',
    'Vampire-Lord',
  ];
  constructor() { }

  ngOnInit(): void {
  }
  public onHeroClick(hero:string):void{
    this.selectedHero = hero;
  }

}
