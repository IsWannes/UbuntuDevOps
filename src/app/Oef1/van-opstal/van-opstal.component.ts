import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-van-opstal',
  templateUrl: './van-opstal.component.html',
  styleUrls: ['./van-opstal.component.css']
})
export class VanOpstalComponent implements OnInit {

  datum : Date;
  random : number;

  Number1 : number = 0;
  Number2 : number = 0;
  Result : number;
  geld : number = 1000;

  constructor() { 
    this.ChooseNewValue();
    setInterval(()=>{this.datum = new Date()},1000)
    setInterval(this.ChooseNewValue, 2000)
    setInterval(()=>{this.Number1 = this.random; this.Number2 = Math.round(Math.random()*100); this.Result = (this.Number1+this.Number2)},500)
    setInterval(()=>{this.geld+=0.1},1)

  }

  ChooseNewValue = () => this.random = _.random(1, 100);
  ngOnInit() {
  }
  VerhoogGeld(){
    this.geld += 1000;
  }

}
