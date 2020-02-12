import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-shani2',
  templateUrl: './shani2.component.html',
  styleUrls: ['./shani2.component.css']
})
export class Shani2Component implements OnInit {

  gridItem: string = "grid-item1";
  history: string[] = new Array();
  input1Value: string = "";
  showHistory: boolean = false;
  wrapper: string = "wrapper1";
  xPos: number;
  yPos: number;
  
  constructor() {
  }

  ngOnInit() {
  }

  ButtonClick = () => {
    this.gridItem = "grid-item" + this.GetRandomGetal();
  }

  ChangeWrapper1 = () => {
    this.wrapper = "wrapper2";
  }

  ChangeWrapper2 = () => {
    this.wrapper = "wrapper1";
  }

  GetRandomGetal = () => {
    
    return _.random(1,5);
  }

  Input1 = (value: string) => {
    // this.input1Value = value; 
    this.history.push(value);
  }

  ShowHistory = () => {
    if (this.showHistory) {
      this.showHistory = false;
    }
    else{
      this.showHistory = true;
    }
  }

  Canvas(event: MouseEvent): void{
    let xpos = event.clientX;
    let ypos = event.clientY;
    this.xPos = xpos;
    this.yPos = ypos;
  }
}
