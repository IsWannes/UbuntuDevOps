import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-van-driel2',
  templateUrl: './van-driel2.component.html',
  styleUrls: ['./van-driel2.component.css']
})

export class VanDriel2Component implements OnInit {
  score: number;
  minScore = 1;
  maxScore = 10;

  textValue1: string = "";
  textValue2: string = "123";
  myInput: string = "";


  textValue = 'initial value';
  log = '';
  logText(value: string): void {
    this.log += `Text changed to '${value}'\n`;
  }


  ngOnInit(): void {
  }

  constructor() {
  }



  //Hover changing name
  name: string = "van Driel Kevin";

  DisplayNameBackwards(): void {
    this.name = "van Driel Kevin";
  }
  DisplayNameForwards(): void {
    this.name = "Kevin van Driel";
  }

  //$event
  values = '';
  onKey(event: KeyboardEvent) {
    this.values += (event.target as HTMLInputElement).value + ' | ';
  }

  //Check strings are equal
  checkString = () => {
    // console.log("1 "+this.textValue1);
    // console.log("2 "+this.textValue2);
    // console.log("3 "+this.myInput);
    if (this.textValue1 === this.textValue2) { return true; }
    else { return false; }
  }

  //NgFor uitlezen van array
  autos = ['Toyota', 'Nissan', 'Mazda', 'Acura'];

  // Random auto generator
  randomAutoID: number = null;
  AutoURL: string = "";
  ToyotaURL: string = "https://imgr1.auto-motor-und-sport.de/Toyota-Supra-Fast-and-Furious-Paul-Walker-1993-2001-169FullWidth-dd3dadbf-859777.jpg";
  NissanURL: string = "https://i.pinimg.com/originals/61/f2/2f/61f22ffc3f4964064af906cc8980889b.jpg";
  MazdaURL: string = "https://www.japanbullet.com/images/2019/08/4891962675d681ad715e495.64250313.jpg";
  AcuraURL: string = "https://i.ytimg.com/vi/QpH91McWqN4/maxresdefault.jpg";

  randomAuto = () => {
    this.randomAutoID = Math.floor((Math.random() * 4) + 1)
    console.log(this.randomAutoID);

    if (this.randomAutoID === 1) {
      console.log("Toyota");
      this.AutoURL = this.ToyotaURL;
    }
    else if (this.randomAutoID === 2) {
      console.log("Nissan");
      this.AutoURL = this.NissanURL;
    }
    else if (this.randomAutoID === 3) {
      console.log("Mazda");
      this.AutoURL = this.MazdaURL;
    }
    else if (this.randomAutoID === 4) {
      console.log("Acura");
      this.AutoURL = this.AcuraURL;
    }

  }//random auto

}
