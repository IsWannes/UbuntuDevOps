import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';
@Component({
  selector: 'app-minta',
  templateUrl: './minta.component.html',
  styleUrls: ['./minta.component.css']
})
export class MintaComponent implements OnInit {
random : number;
date : Date;
color : string;
sum : number = 0;
geld: number = 0;
setRandom = () => this.random = _.random(1,1000);
SomgetalFeestje = () => this.sum += this.random;
berekenGeld = () => this.geld += this.sum/40 * 0.2;
  constructor() {
    setInterval(this.berekenGeld);
    setInterval(()=>{this.date = new Date()},1000);
    setInterval(this.setRandom,10);
    setInterval(this.SomgetalFeestje,500);
  }
  ngOnInit() {
  }



}