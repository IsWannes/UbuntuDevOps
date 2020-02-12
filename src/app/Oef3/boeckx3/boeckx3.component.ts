import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boeckx3',
  templateUrl: './boeckx3.component.html',
  styleUrls: ['./boeckx3.component.css']
})
export class Boeckx3Component implements OnInit {

  generatenamecountry: boolean = false;
  btnBelgium: String = "Random naam uit België";
  btnGermany: String = "Random naam uit Duitsland";
  txtKop: String= "🠰🠰 If you would like to generate a random name, hit the button 🠲🠲";

  constructor() {}

  GenerateRandomName(antwoord: boolean){
    this.generatenamecountry = antwoord;
  }
  
  ngOnInit() {
  }

}
