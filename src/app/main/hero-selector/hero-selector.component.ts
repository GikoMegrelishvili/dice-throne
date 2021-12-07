import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-hero-selector',
  templateUrl: './hero-selector.component.html',
  styleUrls: ['./hero-selector.component.scss'],
})
export class HeroSelectorComponent implements OnInit {
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

  // @Output() heroClicked = new EventEmitter<string>();

  constructor(private mainService: MainService) {}

  ngOnInit(): void {}

  public onHeroClick() {
    //აქ
  }
}
