import {
  Component, OnInit,
  HostListener
} from '@angular/core';
import { username } from './username';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import './yoncalik2.component.css';


@Component({
  selector: 'app-yoncalik2',
  templateUrl: './yoncalik2.component.html',
  styleUrls: ['./yoncalik2.component.css']

})



export class Yoncalik2Component implements OnInit {

  constructor() { }


  ngOnInit() {
  }


  result: string = "";
  longButtons: string[] = ['AC', 'CE'];
  buttons: string[] = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", ".", "0", "=", "+"];


  private preValue: string = "";
  private curValue: string = "";
  show: boolean = false;
  show2: boolean = false;
  show3: boolean = false;

  img1URL: string = "../../../assets/images/1830.jpg";
  img2URL: string = "../../../assets/images/1492.jpg";
  img3URL: string = "../../../assets/images/1999.JPG";
  uitkomst: string;
  public user: username;
  buttonDisabled: boolean;
  count: number = 0;

  task: string;
  tasks = [];
  res: string[];
  knoptitel: string = "PUSH USERNAME IN LIST";
  leerlingWissel: boolean;
  imgArr: string[] = ["../../../assets/images/defaultProfile.png", "../../../assets/images/amir.JPG", "../../../assets/images/1999.JPG"];







  addToExpression(value: string) {

    if (this.result != "") {

      this.preValue = this.curValue;
      this.curValue = value;


    }



    if (value == "AC") {

      this.result = "";
      this.show = false;
      this.show2 = false;
      this.show3 = false;
    }
    else if (value == "CE") {

      this.result = this.preValue != "=" ? this.result.slice(0, -1) : this.result;

    }
    else if (value == "=") {

      this.result = eval(this.result);
      this.uitkomst = this.result



      if (this.uitkomst == "1830") {

        this.show = true;
        this.show2 = false;
        this.show3 = false;

      }
      else if (this.uitkomst == "1492") {

        this.show = false;
        this.show2 = true;
        this.show3 = false;

      }
      else if (this.uitkomst == "1999") {

        this.show = false;
        this.show2 = false;
        this.show3 = true;

      }




      else { this.show = false; }


    }
    else {

      this.result += value;

    }
  }






  Username(naam: string) {
    this.user = (new username(naam));

  }



  onClick() {
    this.tasks.push({ name: this.task });

  }






  index: number;
  fibonacciNumber: number;
  i: number = 0;

  public calculateFibonacciNumber() {
    this.fibonacciNumber = this.calculate(this.index);

  }

  public calculate(i): number {
    return (i <= 2) ? 1 : this.calculate(i - 1) + this.calculate(i - 2);
  }


  even: number = 0;
  evenText: string = "EVEN";

  EvenTeller = () => {

    this.even = this.even + 2;

  }

  oneven: number = 1;
  onevenText: string = "ONEVEN";
  OnEvenTeller = () => {

    this.oneven = this.oneven + 2;

  }






}
