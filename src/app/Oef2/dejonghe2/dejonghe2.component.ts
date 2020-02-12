import { Component, OnInit } from '@angular/core';
import { List } from 'lodash';

@Component({
  selector: 'app-dejonghe2',
  templateUrl: './dejonghe2.component.html',
  styleUrls: ['./dejonghe2.component.css']
})
export class Dejonghe2Component implements OnInit {

  isButtonClicked : boolean = false;
  ErrorList : String[] = ["Error"];
  Buttonstatus:String = "Click To Crash"
  reset:boolean;
  Style : String;
  constructor() { }

  ngOnInit() {
    this.FillList();
  }

  ClickFunction = () =>{
    if(this.isButtonClicked){
      this.Buttonstatus = "Click To Crash"
      this.isButtonClicked = false;
    }
    else{
      this.Buttonstatus = "Click To Fix"
      this.isButtonClicked = true;
    }
  }
  FillList = () =>{
    for (let index = 0; index <100; index++) {
      this.ErrorList.push("Error");
    }
  }
  youSure = () =>{
    if(this.Buttonstatus == "Click To Crash"){
      this.Buttonstatus = "You Sure?";
      this.reset = true;
    }
    else{
      this.reset = false;
    }
  }
  Reset = () =>{
    if(this.isButtonClicked){
      this.Buttonstatus = "Click To Fix"
    }
    else{
      this.Buttonstatus = "Click To Crash"
    }
  } 

  rainbow = (event :MouseEvent) =>{
    let Posx  = event.offsetX;

    if(Posx>=0 && Posx <=50){
      this.Style= "red";
    }
    if(Posx>=50 && Posx <=100){
      this.Style= "blue";
    }
    if(Posx>=100 && Posx <=150){
      this.Style= "yellow";
    }
    if(Posx>=150 && Posx <=200){
      this.Style= "green";
    }
    if(Posx>=200 && Posx <=250){
      this.Style= "purple";
    }
    if(Posx>=250 && Posx <=300){
      this.Style= "hotpink";
    }
  }


}