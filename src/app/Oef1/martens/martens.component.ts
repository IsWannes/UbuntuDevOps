import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";



@Component({
  selector: 'app-martens',
  templateUrl: './martens.component.html',
  styleUrls: ['./martens.component.css']
})
export class MartensComponent implements OnInit {

  Naam:string;

  Kerstmis:Date;
  HuidigeDatum:Date;
  DatumVerschil:number;
  Dagen:number;
  Uren:number;
  Minuten:number;
  Seconden:number;

  Kleur='blue';
  teller:number=0;

  xPos:string;
  yPos:string;
  x:number;
  y:number;
  emoji:string;

  breakdowns:number=1;

  geld:number=0;


  constructor() {
    this.Naam='~ Stef Martens ~';
    this.Kerstmis=new Date(2019,12,25);
    this.emoji="😀";
    this.xPos="15%"
    this.yPos="0%"

    setInterval(this.DatumUpdaten,1000);
    setInterval(() => this.breakdowns++, 200)

   }
   



   DatumUpdaten=() =>
   {
     this.HuidigeDatum=new Date();
     this.DatumVerschil=this.Kerstmis.getTime()-this.HuidigeDatum.getTime();
     this.Seconden=Math.floor(this.DatumVerschil/1000);
     this.Minuten=Math.floor(this.Seconden/60);
     this.Uren=Math.floor(this.Minuten/60);
     this.Dagen=Math.floor(this.Uren/24);

     this.Uren %= 24;
     this.Minuten %= 60;
     this.Seconden %= 60;
   }


   VeranderAchtergrond=() =>
   {
    this.teller++;
    if(this.teller==5) this.teller=0;
    if(this.teller==0) this.Kleur='blue';
    else if(this.teller==1) this.Kleur='green';
    else if(this.teller==2) this.Kleur='black';
    else if(this.teller==3) this.Kleur='purple';
    else if(this.teller==4) this.Kleur='red';
   }
   
   RandomPositie=() =>{
    this.geld+=1;
    this.NieuweXPositie();
    this.NieweYPositie();
    this.xPos=this.x + "%"
    this.yPos=this.y + "%"

    if(this.y>=40 && this.y<50) this.emoji="😀";
    else if(this.y>=50 && this.y<60) this.emoji="🍺";
    else if(this.y>=60 && this.y<70) this.emoji="💩";
    else if(this.y>=70 && this.y<=80) this.emoji="🎅";

   }

   NieuweXPositie = () => this.x = _.random(0, 4) * 10;
   NieweYPositie = () => this.y = _.random(4, 7) * 10;

  ngOnInit() {
  }

}
