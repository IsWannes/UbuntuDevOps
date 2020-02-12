import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import * as _ from "lodash";

export class Namen{
  constructor(public naam:string){}
}

@Component({
  selector: 'app-martens2',
  templateUrl: './martens2.component.html',
  styleUrls: ['./martens2.component.css']
})
export class Martens2Component {

  //random getallen
  randomGetal:number=null;

  // volledige naam
  VolNaam:string="";

  // lijst met namen
 _namen: Namen[]=[];
 public NamenTonen;

  // verhoog getal bij hoveren
  Getal: number=0;

  constructor() {
    setInterval(() => this.randomGetal = this.GetRandomGetal(),2000);
    this.NamenTonen=false;
  }

  onGeefVolNaam(voornaam: HTMLInputElement, achternaam: HTMLInputElement) {
    this.VolNaam=(( < HTMLInputElement > voornaam).value)+" "+(( < HTMLInputElement > achternaam).value);
    this._namen.push(new Namen(this.VolNaam));
  }

  GetRandomGetal =() => this.randomGetal = _.random(100,1000)

  LijstNamen(){
    this.NamenTonen=true;
  }

  VerwLijst(){
    this.NamenTonen=false;
    this._namen=[];
  }

  VerhoogGetal(event){
  this.Getal++;
  }

}
