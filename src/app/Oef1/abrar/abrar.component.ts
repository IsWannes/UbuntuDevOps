import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
import * as moment from "moment";

@Component({
  selector: 'app-abrar',
  templateUrl: './abrar.component.html',
  styleUrls: ['./abrar.component.css']
})
export class AbrarComponent implements OnInit {

  datum: Date;
  Total: number;
  random: number; 
  random2: number;
  Salary: number = 0;
  teller2: number = 1;
  Balance: number = 0;
  message: string;
  LastName: String = 'Abrar';
  FirstName: string = 'Amirhosseyn';
  start : Date = new Date();


  getFullName(): string {
    return this.FirstName + ' ' + this.LastName;
  }

  constructor() { 
    this.updateMessage();
    this.getRandomValue();
    this.getRandomCurrency();
    setInterval(() => this.teller2++, 200)
    setInterval(() => this.datum = new Date(),100)
    setInterval(() => (this.Total = (this.Salary+=this.getRandomValue())),500)
    setInterval(() => (this.Balance+= this.getRandomCurrency()),875)
    setInterval(this.updateMessage, 100)
  }

  getRandomValue = () => this.random = _.random(50,5000)
  getRandomCurrency = () => this.random2 = _.random(100,25000)
  School = () => "2EA2 - Electronica/ICT@AP";
  updateMessage = () => this.message = moment(this.start).fromNow();

  ngOnInit() {
  }

}
