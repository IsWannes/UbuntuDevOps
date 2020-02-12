import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-minta2',
  templateUrl: './minta2.component.html',
  styleUrls: ['./minta2.component.css']
})
export class Minta2Component implements OnInit {

  text: string = "";
  secret: boolean = false;
  Code: string = "SGFsbG8gd";
  Code2: string = "2VyZWxkIQ==";
  ButtonValue: string = "Hallo";
  isDisabled: boolean = false;
  imageUrl: string = "https://afbeeldingenverjaardag.nl/wp-content/uploads/2019/05/Afbeeldingen-verjaardag-15.jpg";
  URL: string = "http://www.staggeringbeauty.com/";
  laatste: string = "";

  values = [
    { name: 'Groen' },
    { name: 'Blauw' },
    { name: 'Geel' },
    { name: 'Oranje' },
    { name: 'Paars' }
  ];

  generateCode(): string {
    return this.Code + this.Code2;
  }

  initialize(textInput: HTMLInputElement) {
    this.laatste = textInput.value;
  }

  ChangeState = () => {
    if (this.ButtonValue == "Hallo" && this.isDisabled == false) {
      this.ButtonValue = "Wereld!";
    }
  }

  color: string="";

  CheckCode = () => {
    if(this.text.toUpperCase() == "RICK")
    {
      this.color = "green";
      this.secret = true;
    }
    // if (document.getElementById("code").textContent == "RICK" || document.getElementById("code").textContent == "Rick" || document.getElementById("code").textContent == "rick") {
    //   document.getElementById("code").style.color = "green";
    //   this.secret = true;
    // }
  }




  constructor() { }

  ngOnInit() {
  }

}
