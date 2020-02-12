import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-van-den-heuvel',
  templateUrl: './van-den-heuvel.component.html',
  styleUrls: ['./van-den-heuvel.component.css']
})
export class VanDenHeuvelComponent implements OnInit {

  time: Date;
  birthday: Date = new Date(2019,10,23,0,0,0,0);
  timeToBirthday : number;
  timeToBirthdayDate: number;
  daysToBirthday: number;
  naam: String;
  birthdayMessage: string;
  birthdayCheck: boolean;
  random: number;
  
  
  constructor() {
    this.naam = "Anton Van Den Heuvel";
    this.time = new Date();
    this.timeToBirthday = this.birthday.valueOf() - this.time.valueOf();
    this.daysToBirthday = this.timeToBirthday / (1000 * 3600 * 24); 
    this.birthdayCheck = false;
    this.random = _.random(100.00,500.00);
    setInterval(this.Refresh, 1000)
   }
   checkBirthday = () =>{
    this.birthdayCheck = true
     if (this.birthday.getDate == this.time.getDate && this.birthday.getMonth == this.time.getMonth) {
       this.birthdayMessage = "Het is zover! Gelukkige verjaardag! Of niet?";
      } // Om een of andere reden worden birthday.getDate en time.getDate altijd hetzelfde. Het is mij nog niet gelukt uit te vissen waarom
     else {
       this.birthdayMessage = "Nee, nog niet!";
    }
   }

   Refresh = () => {
    this.time = new Date();
    this.timeToBirthday = this.birthday.valueOf() - this.time.valueOf();
    this.daysToBirthday = this.timeToBirthday / (1000 * 3600 * 24); 
   }

  ngOnInit() {
  }

}
