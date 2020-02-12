import { Component, OnInit } from '@angular/core';
import * as _ from "lodash"

@Component({
  selector: 'app-verschooren',
  templateUrl: './verschooren.component.html',
  styleUrls: ['./verschooren.component.css']
})
export class VerschoorenComponent implements OnInit {

  Datum : Date;
  Random: number;
  Number3 : number = 0;
  Money : number = 0;

  RandomValue = () => this.Random = _.random(1, 100);

  constructor() {
    this.RandomValue();
    setInterval(()=>{this.Datum = new Date()}, 1000)
    setInterval(this.RandomValue, 2000)
    setInterval(()=>{this.Number3+=this.Random},3000)
    setInterval(()=>{this.Money+=this.Random},1000)
   }

  
  ngOnInit() {
  }

}
