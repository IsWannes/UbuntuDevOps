import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruhschulz2',
  templateUrl: './fruhschulz2.component.html',
  styleUrls: ['./fruhschulz2.component.css']
})
export class Fruhschulz2Component implements OnInit {

  heroes = [
    {id: 1, name:'Superman', attack:50, defence:50},
    {id: 2, name:'Batman',attack:75, defence:25},
    {id: 5, name:'BatGirl',attack:75, defence:25},
    {id: 3, name:'Robin',attack:25, defence:75},
    {id: 4, name:'Flash',attack:10, defence:99}
  ];
   villains =  [
    {id: 1, name:'Thanos', attack:80, defence:80},
    {id: 2, name:'The Joker',attack:50, defence:50},
    {id: 5, name:'Magneto',attack:75, defence:10},
    {id: 3, name:'The Red Skull',attack:65, defence:30},
    {id: 4, name:'Lex Luthor',attack:25, defence:75}
  ];
    heroSelected:string = "Please select a hero";
    villainSelected:string ="Please select a villain";
    statusHeroConfirmButton:boolean=false;
    statusVillainConfirmButton:boolean=false;
    statusFightButton:boolean=true;
  
    inputHero:string;
    inputVillain:string;
    heroInput:string;
    labelHiddenButton:string= "Try and change my text!";
    hiddenButtonText:string ="Click me?";
    hiddenButtonStatus:boolean;
    linkStatus:boolean=true;
    linkDestination:string = "https://www.ap.be";
    inputStatus:boolean=true;
    inputLabelText:string = "Change this text to something you want!";
  constructor() { }

  ngOnInit() {
  }
  OnClickHero(){
    this.statusHeroConfirmButton=true;
  }
  OnClickVillain(){
    this.statusVillainConfirmButton=true;
  }

  StartNextModule(){
    
    this.labelHiddenButton="Press me!";
    this.linkStatus=false;
    }

  
  ChangeLinkAdress(){
    this.linkDestination="https://angular.io";
    this.inputStatus=false;
  }
  PressedHiddenLabel(parameterFromLabel: MouseEvent){
    let cursorX = parameterFromLabel.clientX;
    let cursorY = parameterFromLabel.clientY;
    this.labelHiddenButton =cursorY.toString()+" "+cursorX.toString();
  }
  ChangeLabelText(t){
    console.log(t);
    this.inputLabelText=t;
  }

}
