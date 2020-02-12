import { Component, OnInit } from '@angular/core';
import { NumericDictionary } from 'lodash';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-faes',
  templateUrl: './faes.component.html',
  styleUrls: ['./faes.component.css']
})
export class FaesComponent implements OnInit {

  summerVac : Date;
  dateNow : Date;
  dateDiff : number;
  secondsDiff : number;
  minutesDiff : number;
  hoursDiff: number;
  daysDiff : number;

  buttonPressed : boolean;
  eurValue : number;
  dollValue: number;

  name : string;

  constructor() {
    this.name = "Matisse Faes";
    this.summerVac = new Date(2020,7,1);
    this.buttonPressed = false;
    this.eurValue = 1;
    this.dollValue = 1.11;

    setInterval(this.updateDate, 1000);
  }

  ngOnInit() {
  }

  updateDate = () =>
  {
    this.dateNow = new Date();
    this.dateDiff = this.summerVac.getTime() - this.dateNow.getTime();
    this.secondsDiff = Math.floor(this.dateDiff / 1000);
    this.minutesDiff = Math.floor(this.secondsDiff / 60);
    this.hoursDiff = Math.floor(this.minutesDiff / 60);
    this.daysDiff = Math.floor(this.hoursDiff / 24);

    this.hoursDiff %= 24;
    this.minutesDiff %= 60;
    this.secondsDiff %= 60;
  }

  toggleCurrency = () => { 
    this.buttonPressed = !this.buttonPressed;
  }

}
