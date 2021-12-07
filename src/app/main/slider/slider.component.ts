import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from '../main.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit,OnDestroy {
  public heroName: string = 'Monk';
  public description: string =
    'The Monk is a master in the art of Chi. He can channel this ancient energy to absorb incoming attacks from his opponents. He can also use Chi to unleash a maelstrom of pain. The Monk is not only the calm before the storm but the storm itself.';
  public weapon: string = 'Chi';

  private _subs = new Subscription();

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.subscribeToChoosenHero();
  }
  ngOnDestroy():void{
    this._subs.unsubscribe();
  }

  private subscribeToChoosenHero(): void {
    this._subs.add(
      this.mainService.choosenHero.subscribe((hero) => {
        //აქ
      })
    );
  }
}
