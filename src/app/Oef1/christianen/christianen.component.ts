import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-christianen',
  templateUrl: './christianen.component.html',
  styleUrls: ['./christianen.component.css']
})
export class ChristianenComponent implements OnInit {

  name = 'Koen Christianen';
  date = new Date();
  constructor() { 
    setInterval(this.UpdateNumberValue,2000);
    setInterval(this.UpdateRandomValue,2000);
    setInterval(this.UpdateText, 1500)
  }

  getal1: number;
  getal2: number;
  uitkomst:number;
  UpdateNumberValue = () =>{
    this.getal1 = _.random(1,50);
    this.getal2 = _.random(1,50);
    this.uitkomst = this.getal1 + this.getal2;
  }

  random: number;
  UpdateRandomValue = () =>{
    this.random = _.random(1,5);
  }
  textToShow: string;
  UpdateText = () => {
    switch (this.random) {
      case 1:
        this.textToShow = 'looks like the random number is rather small!'
        break;
      case 2:
          this.textToShow = '    '
        break;
      case 3:
          this.textToShow = 'The number 2 for random number is empty.'
        break;
      case 4:
          this.textToShow = 'This is just text.'
        break;
      case 5:
          this.textToShow = 'looks like the random number is rather big!'
        break;
      default:
        break;
    }
  }

  ngOnInit() {
  }

}
