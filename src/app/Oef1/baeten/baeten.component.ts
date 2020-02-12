import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baeten',
  templateUrl: './baeten.component.html',
  styleUrls: ['./baeten.component.css']
})
export class BaetenComponent implements OnInit {

  public Name: string;
  public Title1: string;
  
  
  private IMG_Question = "❓";
  private IMG_Thinking = "🤨";
  private IMG_Win = "🥳";
  private IMG_Loose = "🥺";
  
  private Current_Number_IMG = "";
  private Current_Smiley_IMG = "";
  private GuessedTime;
  public buttonGuess = "guess";

  number = 0;

  constructor() { }

  ngOnInit() {
    this.Name = "- tom baeten -";
    this.Title1 = "Guess the number 🧐";

    this.Current_Number_IMG = this.IMG_Question;
    this.Current_Smiley_IMG = this.IMG_Thinking;
  }

  getHintNr() : string {return "Number 0-10"}

  setNumber(inNR)
  {
    this.number = Math.floor((Math.random() * 10) + 1);
    this.Current_Number_IMG = this.number.toString();

    if(inNR == this.number)
    {
      this.Current_Smiley_IMG = this.IMG_Win;
      this.GuessedTime = new Date();
    }
    else this.Current_Smiley_IMG = this.IMG_Loose;
  }

  getSmileyStatus()
  {
    return this.Current_Smiley_IMG;
  }

  getNumberStatus()
  {
    return this.Current_Number_IMG;
  }

  getDate()
  {
     if(this.GuessedTime != null)
      return this.GuessedTime;
    else
     return "";
  }

}
