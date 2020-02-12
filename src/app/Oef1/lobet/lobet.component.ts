import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-lobet',
  templateUrl: './lobet.component.html',
  styleUrls: ['./lobet.component.css']
})
export class LobetComponent implements OnInit {

  ngOnInit() { }
  keuze:string;
  opdrachtstring:string = "interpolation & pipes" ;
  counter: number =0;
  random: number;
  percent: number;
  deeltal:number = 1234;
  optelnummer:number = 0.01;
  theDate:Date;
  showvar: boolean = true;
  toggle = true; // start with true == shortDate

  constructor() {
    setInterval(this.UpdateCounter,1);
    setInterval(this.Refresh,1000);
    setInterval(this.updaterandom,1000);
  }
  
  get format()   { return this.toggle ? 'short' : 'full'; }
  toggleFormat() { this.toggle = !this.toggle;}
  togglecomponent(){this.showvar = !this.showvar;}
  Refresh=()=>{this.theDate = new Date();}
  UpdateCounter =() => {this.counter += this.optelnummer;}
  setnumber1=()=>{this.optelnummer = 0.001}
  setnumber2=()=>{this.optelnummer = 0.01}
  setnumber3=()=>{this.optelnummer = 0.1}
  setnumber4=()=>{this.optelnummer = 1}
  setnumber5=()=>{this.optelnummer = 10}
  updaterandom=()=>{this.random = _.random(1,2000); this.percent = this.random/this.deeltal }
}