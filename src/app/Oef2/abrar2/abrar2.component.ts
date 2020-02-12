import { Component, OnInit } from '@angular/core';
import { FootballPlayers } from './football_players';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-abrar2',
  templateUrl: './abrar2.component.html',
  styleUrls: ['./abrar2.component.css']
})
export class Abrar2Component implements OnInit {

  public changeImg:boolean; 
  public clickImg:boolean;
  public check: boolean;
  public naam: string;
  public count: number = 0;
  public text:string = "SAVE";
  public player: FootballPlayers;  
  public LastName: String = 'Abrar';
  public FirstName: string = 'Amirhosseyn';
  public footballPlayers: FootballPlayers[] = [];
  public imageUrl: string="../../../assets/images/dollar1.jpg";
  public arrayImages:String[] =
  [
    "../../../assets/images/dollar1.jpg",
    "../../../assets/images/messi.png",
    "../../../assets/images/messi2.png",
    "../../../assets/images/griezman.png",
    "../../../assets/images/griezman2.png",
    "../../../assets/images/neymar.png",
    "../../../assets/images/neymar2.png",
    "../../../assets/images/uh.jpeg",
    "../../../assets/images/warning.png",
    "../../../assets/images/warning2.png"
  ];

  Increment = () => {
    this.count = this.count + 100;
    console.log("Clicked :",event);
  }

  Teller(value: string) {
    this.naam = value;
  }

  getFullName(): string {    
    console.log("Mouse Over :",event); //hovering name
    return this.FirstName + ' ' + this.LastName;
  }

  Player(_naam: string, _team: string, _nummer: number, _prijs: number) {
    this.footballPlayers.push(new FootballPlayers(_naam, _team, _nummer, _prijs));
  }

  constructor() {
    this.check= false;
    this.changeImg = false;
    this.clickImg =false;
    this.footballPlayers.push(new FootballPlayers("Lionel Messi", "Fc Barcelona", 10, 853000000));
    this.footballPlayers.push(new FootballPlayers("Frenkie De Jong", "Fc Barcelona", 21, 270000000));
    this.footballPlayers.push(new FootballPlayers("Neymar Da Silva Santos Junior", "Paris Saint-Germain", 10, 350000000));
  }

  ngOnInit() {
  }
}
