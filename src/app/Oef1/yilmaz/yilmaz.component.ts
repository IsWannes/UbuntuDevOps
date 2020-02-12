import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-yilmaz',
  templateUrl: './yilmaz.component.html',
  styleUrls: ['./yilmaz.component.css'],
  providers : [DatePipe]
})
export class YilmazComponent implements OnInit {


  Tijd : Date;
  EngTijd : string;
  UsTijd : string;
  ChinaTijd : string;

  TimeFormat: string = "dd/MM/yyyy HH:mm:ss";

  FotoNummer : number;
  counter : number;
  Morgen : string = "Goedemorgen";
  Middag : string = "Goedemiddag";

  Kleineletter : string = "kleineletters";
  Groteletter: string = "hoofdletters";
  InputText : string = "";
  SaveText: string ="";
  Letter: boolean = false;

  constructor() {
    this.FotoNummer = _.random(2,99);
    this.Tijd = new Date();
    this.EngTijd = new DatePipe('en-US').transform(new Date, this.TimeFormat , 'GMT+0')
    this.UsTijd = new DatePipe('en-US').transform(new Date, this.TimeFormat , 'GMT-8')
    this.ChinaTijd = new DatePipe('en-US').transform(new Date, this.TimeFormat , 'GMT+8')
    
    //this.UsTijd = new DatePipe("nl-NL");


   setInterval( 
     () =>{
      this.Tijd = new Date();
      this.EngTijd = new DatePipe('en-US').transform(new Date, this.TimeFormat , 'GMT+0')
      this.UsTijd = new DatePipe('en-US').transform(new Date, this.TimeFormat , 'GMT-8')
      this.ChinaTijd = new DatePipe('en-US').transform(new Date, this.TimeFormat , 'GMT+8')

     },1000
   )

    setInterval(() =>{
      this.FotoNummer = _.random(1,300  );
      
    },5000)
   }

   Savechanges(){
      this.InputText = this.SaveText;
   }

   InputWaarde = (waarde : any) => {
    this.SaveText = waarde.target.value
  }
    CaseChange = () =>{
    this.Letter = !this.Letter;
   }

  

  ngOnInit() {
  }

}
