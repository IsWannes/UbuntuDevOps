import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

export class Persoon{
  name: String | null;
  lastName: String | null;
}

export class BankAccount{
  owner: Persoon;
  credit: number = 0;

  AddCredit = () => {
    this.credit++;
  }
}

@Component({
  selector: 'app-van-riel',
  templateUrl: './van-riel.component.html',
  styleUrls: ['./van-riel.component.css']
})
export class VanRielComponent implements OnInit {

  person: Persoon;
  account: BankAccount;
  currentTime: Date;
  currenthour: number;
  randomValue: number | null;

  constructor() {
    this.person = new Persoon();
    this.person.name = "Lennert";
    this.person.lastName = "Van Riel"
    this.account = new BankAccount();
    this.account.owner = this.person;

    this.currentTime = new Date();
    this.currenthour = this.currentTime.getHours();
    setInterval(this.Refresh, 1000);
   }

  ngOnInit() {
  }

  Refresh = () => {
    this.currentTime = new Date();
    this.currenthour = this.currentTime.getHours();
  }

  generateNumber = () => {
    this.randomValue = _.random(0.00, 9999.99);
  }

  addCredit = () => {
    this.account.credit += this.randomValue;
  }

}
