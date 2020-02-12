import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-elmurzayev',
  templateUrl: './elmurzayev.component.html',
  styleUrls: ['./elmurzayev.component.css']
})
export class ElmurzayevComponent {

  public textPositief: string = "Positieve kant opgaan";
  textNegatief: string = "Negatieve kant opgaan";
  flag: number = 6;
  getal: number = 0;
  snelGetal: number = 0;
  firstState: number = 0;
  lastState: number = 0;
  text: string = "De datum van vandaag is: ";
  theDate = new Date();

  verlagen = () => {
    this.getal--;
  }

  verhogen = () => {
    this.getal++;
  }

  snelGetalZien = () => {
    if (this.flag == 4) {
      this.snelGetal++;
    }
    else if (this.flag == 6) {
      this.snelGetal--;
    }
  }



  Positief = () => {
    if (this.flag == 6) {
      this.flag = 4;
    }
  }

  Negatief = () => {
    if (this.flag == 4) {
      this.flag = 6;
    }
  }






  constructor() {
    setInterval(this.snelGetalZien, 50);


  }


}

