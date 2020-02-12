
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wieselblad',
  templateUrl: './wieselblad.component.html',
  styleUrls: ['./wieselblad.component.css']
})
export class WieselbladComponent implements OnInit {

  MyName : String = "Wieselblad Mathias";

  vandaag : Date = new Date() ;
  
  randSchuld : number = null;
  randMoney : number = Math.random()*1000;
  MyMoney : number = this.randMoney;
  startMoney : number = this.randMoney;
  percent : number;

  
  
  constructor() { }
  
  ngOnInit() {
  }

  AddDebt = () => {
    this.randSchuld = -Math.random()*10;
    this.MyMoney = this.MyMoney + this.randSchuld;
    this.percent = this.MyMoney/this.startMoney;
  }
}

