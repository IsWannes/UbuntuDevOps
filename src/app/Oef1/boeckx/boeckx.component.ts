import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-boeckx',
  templateUrl: './boeckx.component.html',
  styleUrls: ['./boeckx.component.css']
})
export class BoeckxComponent implements OnInit {
  firstname: string;
  lastname: string;
  datum: Date;
  value: number = 1;
  random: number;

  constructor() {
    this.firstname = 'Jan';
    this.lastname = 'Boeckx';
    setInterval(() => this.datum = new Date(), 1000);
    setInterval(() => this.random = this.GetRandomValue(),2000);
    this.GetRandomValue();
  }

  GetFullName = () => {
    return this.firstname + " " + this.lastname;
  }

  IncreaseValue = () => {
    this.value = this.value + 1;
  }

  GetRandomValue =() => this.random = _.random(100,1000)  

  ngOnInit() {
  }  

}
