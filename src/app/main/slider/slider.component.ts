import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() public heroName: string = 'Monk';
  @Input() public description: string =
    'The Monk is a master in the art of Chi. He can channel this ancient energy to absorb incoming attacks from his opponents. He can also use Chi to unleash a maelstrom of pain. The Monk is not only the calm before the storm but the storm itself.';
  @Input()  public weapon: string = 'Chi';

  constructor() {}

  ngOnInit(): void {
  }
}
