import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public hero:string = "Monk";
  constructor() { }

  ngOnInit(): void {
  }

  public onHeroClicked(){
    //აქ
  }
}
