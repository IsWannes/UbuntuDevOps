import { Component, OnInit } from '@angular/core';
import { browser } from 'protractor';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-vandenheuvel2',
  templateUrl: './vandenheuvel2.component.html',
  styleUrls: ['./vandenheuvel2.component.css']
})
export class Vandenheuvel2Component implements OnInit {

  clicked:boolean;
  tried:boolean;
  ingevuld:boolean;
  correct:boolean;
  amountClicked:number;
  endOfSong:boolean;
  name1:string;
  name2:string;
  lijst:string[] = [];
  background:string;
  xPos: number;
  yPos: number;
  imageUrl:string;

  constructor() 
  {
    this.tried = false;
    this.endOfSong = false;
    this.clicked = false;
    this.ingevuld = false;
    this.correct = false;
    this.amountClicked = 0;
    this.name1 = "Undefined";
    this.name2 = "Undefined?!";
    this.imageUrl="https://www.hscbrabo.be/images/products/rodecodex.jpg"
  }

  ngOnInit() { }

  NameChange = () => 
   {
     this.name1 = "Undefined?!";
   }
  
 Undefined = () => {
   if (this.amountClicked < 8) {
     this.clicked = true;
     this.amountClicked++;
     this.AddToList(this.amountClicked); }
  else {this.endOfSong = true;}
   }

 AddToList = (toAdd:number) => 
 {
   switch(this.amountClicked%8) {
     case 1: this.lijst.push("Awel, awel, ");
       break;
     case 2: this.lijst.push("wadoedena");
       break;
     case 3: this.lijst.push("nadoederwa,");
       break;
     case 4: this.lijst.push("Waddisdana");
       break;
     case 5: this.lijst.push("oewattena");
       break;
     case 6: this.lijst.push("wadeddena,");
       break;
     case 7: this.lijst.push("Veur wattena");
       break;
     case 0: this.lijst.push("oekandana;");
       break;
   }
  }
  TryMe = (event:MouseEvent) => {
    this.tried = true;
    this.xPos = event.clientX;
    this.yPos = event.clientY;
    ;
 }
 LiedChecker = (value) =>{
  this.ingevuld = true;
  if (value == "Oekandana" || value == "oekandana") {
    this.correct = true;
    this.imageUrl="http://www.diana.be/wp-content/uploads/2010/09/facebook_photo_download_395257000500749.jpg"
  }
}
}
