import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-elmoufid2',
  templateUrl: './elmoufid2.component.html',
  styleUrls: ['./elmoufid2.component.css']
})
export class Elmoufid2Component implements OnInit {

  public playerName: string;
  public AP_Image: string;

  public randomQuestion: number;
  private lastQuestion: number;

  public allQuestions: Question[] = [];
  public allResults: Result[] = [];
  private numberOfResults: number;

  public LastXPos: number;
  public LastYPos: number;
  private timeInMillis: number = 0;

  public ResetButtonMessage: string;

  constructor() {
    this.randomQuestion = 0;
    this.lastQuestion = 0;
    this.LastXPos = 0;
    this.LastYPos = 0;
    this.allQuestions[0] = new Question("Hoelang bestaat AP Hogeschool?", "6 jaar", "8 jaar", "1");
    this.allQuestions[1] = new Question("Welke kleur heeft ons logo?", "Orangje", "Rood", "2");
    this.allQuestions[2] = new Question("Duid grootste campus aan", "Noorderplaats", "Ellermanstraat", "1");
    this.allQuestions[3] = new Question("Hoeveel studenten zijn er ingeschreven op AP?", "11000", "8000", "1");
    this.allQuestions[4] = new Question("Op hoeveel studie punten staat dit vak?", "4", "3", "2");
    this.allQuestions[5] = new Question("Wat kost een broodje in de cafetaria", "2,75 EUR", "3 EUR", "1");
    this.AP_Image = "https://www.ap.be/themes/custom/ap_hogeschool/src/images/logo-ap.svg";
    this.ResetButtonMessage = "Kan niet resetten, beantwoord eerst een vraag";

    setInterval(() => {
      this.addTime();
    }, 100);

  }

  ngOnInit() {

    this.PickRandomQuestion();
    this.ResetQuiz();

  }

  addTime(): void {
    this.timeInMillis += 100;
  }

  SetName(player: string): void {
    this.playerName = "Welcome: " + player;
  }

  PickRandomQuestion(): void {
    // Voorkom om de vorige vraag terug te krijgen
    while (this.lastQuestion == this.randomQuestion) {
      this.randomQuestion = Math.floor((Math.random() * (this.allQuestions.length)) + 0);
    }
    this.lastQuestion = this.randomQuestion;
  }

  CheckMovement(event: MouseEvent): void {

    if (this.timeInMillis > 500) {
      console.log(event);
      if (event.clientX != this.LastXPos || event.clientY != this.LastXPos) {
        this.timeInMillis = 0;
        this.LastYPos = event.clientY;
        this.LastXPos = event.clientX;
        this.PickRandomQuestion();
      }

    }
  }


  ResetQuiz(): void {
    this.allResults = [];
    this.playerName = null;
    this.ResetButtonMessage = "Kan niet resetten, beantwoord eerst een vraag";
  }

  CheckAntwoord(mform: NgForm): void {

    this.numberOfResults = this.allResults.length;

    if (mform.value.antw != null && mform.value.antw != "") {

      this.ResetButtonMessage = "RESET HIER";

      if (mform.value.antw == this.allQuestions[this.randomQuestion].CorrectAnswerNumber) {
        this.allResults[this.numberOfResults] = new Result(this.allQuestions[this.randomQuestion].Title, "juist");
      }
      else {
        this.allResults[this.numberOfResults] = new Result(this.allQuestions[this.randomQuestion].Title, "fout");
      }

      mform.resetForm();
      this.PickRandomQuestion();

    }
    else {
      alert("Geen antwoord aangeduid");
    }

  }


}

class Result {

  public Question: string;
  public State: string; // Juist of Fout

  constructor(question: string, state: string) {
    this.Question = question;
    this.State = state;
  }

}

class Question {

  public Title: string;
  public Answer1: string;
  public Answer2: string;
  public CorrectAnswerNumber: string;

  constructor(title: string, answ1: string, answ2: string, correctAnsw: string) {
    this.Title = title;
    this.Answer1 = answ1;
    this.Answer2 = answ2;
    this.CorrectAnswerNumber = correctAnsw;
  }

}
