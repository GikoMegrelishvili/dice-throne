import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero-selector',
  templateUrl: './hero-selector.component.html',
  styleUrls: ['./hero-selector.component.scss'],
})
export class HeroSelectorComponent {
  @Input() public heroes:string[]=[""];
  @Output() public heroClicked = new EventEmitter<string>();

  public emitHeroClicked(hero:string):void{
    this.heroClicked.emit(hero);
  }

}
