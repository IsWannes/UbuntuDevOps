import { Component, OnInit } from '@angular/core';
import { parse } from 'url';
import * as _ from "lodash"

@Component({
  selector: 'app-elmoufid',
  templateUrl: './elmoufid.component.html',
  styleUrls: ['./elmoufid.component.css']
})
export class ElmoufidComponent implements OnInit {

  Score: number;
  Rounds: number;

  private Mode: string;
  public theNumber: number;
  private PreviousNumber: number;
  private tryedNumber: number;
  public ButtonClass1: string;
  public ButtonClass2: string;
  public ButtonClass3: string;

  public theTime: Date;

  constructor() {
    this.Rounds = 0;
    this.Score = 0;
    this.Mode = "1";
    this.theNumber = 0;
    this.tryedNumber = 0;
    this.PreviousNumber = 0;
    this.ButtonClass1 = "SelectedButton";
    this.ButtonClass2 = "NotSelected";
    this.ButtonClass3 = "NotSelected";
    this.theTime = new Date();

    setInterval(() => {
      this.UpdateTime();
    }, 1000);
  }


  ChangeMode(inp: string): void {
    this.Mode = inp;
    if (this.Mode == "1") {
      this.ButtonClass1 = "SelectedButton";
      this.ButtonClass2 = "NotSelected";
      this.ButtonClass3 = "NotSelected";
    } else if (this.Mode == "2") {
      this.ButtonClass1 = "NotSelected";
      this.ButtonClass2 = "SelectedButton";
      this.ButtonClass3 = "NotSelected";
    }
    else if (this.Mode == "3") {
      this.ButtonClass1 = "NotSelected";
      this.ButtonClass2 = "NotSelected";
      this.ButtonClass3 = "SelectedButton";
    }
  }


  UpdateTime(): void {
    this.theTime = new Date();
  }

  StartGame(): void {

    this.theNumber = this.GenerateNumber();
    this.PreviousNumber = this.GenerateNumber();

    setTimeout(() => {
      this.theNumber = 0;
    }, 1000)

  }

  GenerateNumber(): number {

    if (this.Mode == "1") {
      this.ButtonClass1 = "SelectedButton";
      return this.theNumber = Math.floor((Math.random() * 11) + 1);
    } else if (this.Mode == "2") {
      this.ButtonClass2 = "SelectedButton";
      return this.theNumber = Math.floor((Math.random() * 1001) + 100);
    }
    else if (this.Mode == "3") {
      this.ButtonClass3 = "SelectedButton";
      return this.theNumber = Math.floor((Math.random() * 10001) + 1000);
    }

  }


  ResetGame(): void {
    this.Rounds = 0;
    this.Score = 0;
  }

  CheckNumber(inp: string): void {

    this.tryedNumber = parseInt(inp);

    if (this.tryedNumber == this.PreviousNumber) {
      this.Score++;
      this.Rounds++;
    }
    else {
      this.Rounds++;
    }
    this.PreviousNumber = 0;

  }

  ngOnInit() {
  }

}
