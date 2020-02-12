import { Component, OnInit } from '@angular/core';
import * as _ from "lodash"

@Component({
  selector: 'app-de-jonghe',
  templateUrl: './de-jonghe.component.html',
  styleUrls: ['./de-jonghe.component.css']
})
export class DeJongheComponent implements OnInit {

  datum : Date;
  random : number;

  Number1 : number = 0;
  Number2 : number = 0;
  Result : number;
  Number3 : number = 0;

  constructor() { 
    this.ChooseNewValue();
    setInterval(()=>{this.datum = new Date()},1000)
    setInterval(this.ChooseNewValue, 2000)
    setInterval(()=>{this.Number1+=1; this.Number2+=1; this.Result = (this.Number1*this.Number2)},1000)
    setInterval(()=>{this.Number3+=this.random},1000)

  }

  ChooseNewValue = () => this.random = _.random(1, 10);
  ngOnInit() {
  }

}
