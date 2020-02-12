import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { Click } from '../tobback2/tobback2.component';

@Component({
  selector: 'app-wieselblad2',
  templateUrl: './wieselblad2.component.html',
  styleUrls: ['./wieselblad2.component.css']
})
export class Wieselblad2Component implements OnInit {

  private me : string ="Mathias Wieselblad"
  public comits  : number;
  public begin : boolean;
  public naam:string;
  public voornaam:string;
  public klacht: string;
  public tekst: string;
  public test: boolean;
  complaints: complaint[]=[];

  constructor() {
    this.begin = false; 
    this.test = true;
    this.tekst = "    ";
    this.comits = -1;
    this.addComplaint("Naam","Voornaam", "Klacht");
   }

addComplaint(_naam: string, _voornaam: string, _klacht: string){
  this.complaints.push(new complaint(_naam, _voornaam, _klacht));
  this.updatecomits();
}

updatecomits(){
  this.comits = this.comits+1;
}

changeTekst(){
  if(this.test==true){
    this.tekst ="tadaaa";
    this.test=false;
  }
  else{
    this.test = true;
    this.tekst = "     ";
  }
}

  ngOnInit() {
  }
  
}

export class complaint{
  public naam: string;
  public voornaam: string;
  public klacht:string;
  constructor(N: string, VN: string, K: string){
    this.naam = N;
    this.voornaam= VN;
    this.klacht= K;
  }
}
