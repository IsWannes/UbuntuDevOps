import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tobback2',
  templateUrl: './tobback2.component.html',
  styleUrls: ['./tobback2.component.css']
})
export class Tobback2Component implements OnInit {
  clicks: Click[] = [];
  private temp: Click;
  public color: string;
  private i: number = 0;
  public text: string;
  public buttonState:boolean;
  constructor() { }
  public AddClick(e) {
    this.temp = new Click(e.offsetX, e.offsetY);
    this.clicks.push(this.temp);
  }
  public ShowText(_text: string) {
this.text = _text;
this.buttonState = true;
  }
  public ChangeColor() {
    this.i++;
    switch (this.i) {
      case 1: {
        this.color = "black";
        break;
      }
      case 2: {
        this.color = "blue";
        break;
      }
      case 3: {
        this.color = "yellow";
        break;
      }
      case 4: {
        this.color = "orange";
        break;
      }
      case 5: {
        this.color = "gray";
        break;
      }
      case 6: {
        this.color = "purple";
        break;
      }
      case 7: {
        this.color = "red";
        this.i = 0;
        break;
      }
    }
  }
  ngOnInit() {
  }

}
export class Click {
  public X: number;
  public Y: number;
  constructor(_X: number, _Y: number) {
    this.X = _X;
    this.Y = _Y;
  }
}
