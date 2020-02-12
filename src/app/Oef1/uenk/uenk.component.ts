import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-uenk',
  templateUrl: './uenk.component.html',
  styleUrls: ['./uenk.component.css']
})

export class UenkComponent implements OnInit {

    time: Date;
    hour: number;
    naam: string;
    geld: number;
    number: number;
    age: number;
  
    constructor() { 
      this.time = new Date();
      this.hour = this.time.getHours();
      this.naam = "Jens uenk";
      this.age = 19;

      setInterval(this.Refresh, 1000);
    }
  
    ngOnInit() {
    }

    Refresh = () => {
      this.time = new Date();
      this.hour = this.time.getHours();
      this.randomNumber();
      this.geld = this.number;
    }

    randomNumber = () => {
      this.number = _.random(0.00, 100.00);
    }

}
