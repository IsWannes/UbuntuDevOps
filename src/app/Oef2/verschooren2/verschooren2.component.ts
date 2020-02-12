import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verschooren2',
  templateUrl: './verschooren2.component.html',
  styleUrls: ['./verschooren2.component.css']
})
export class Verschooren2Component implements OnInit {
  fietsBool: boolean = false;
  ActivateList: boolean = false;
  input: string;
  naam: string;
  
  resolveAll: boolean = true;
  databaseEntries = [
    {
      brand: 'Canyon Aeroad 8.0 slx',
      prijs: '€ 6999'
    },
    {
      brand: 'S-Works Tarmac',
      prijs: '€ 7999'
    },
    {
      brand: 'Trek Madone',
      prijs: '€ 8000'
    }
  ]
  dbActivate(){
this.ActivateList = true;
  }
  onClickFiets(){
    this.fietsBool = true;
    console.log("Event: ",event);
  }
  allesTerug(){
    this.resolveAll = true;
  }
  show(naamInput: HTMLInputElement){
    this.naam = naamInput.value;
  }
  hoverMethod(){
    this.resolveAll = false;
    
  }
  constructor() { }

  ngOnInit() {
  }

}
