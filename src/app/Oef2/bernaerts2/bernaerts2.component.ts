import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-bernaerts2',
  templateUrl: './bernaerts2.component.html',
  styleUrls: ['./bernaerts2.component.css']
})
export class Bernaerts2Component implements OnInit {

                    //Er werkt niets in deze component .....?

  constructor() { }

  ngOnInit() {
  }
  //ngIf
  datum: Date;

  get IsMaDi(){
    if (this.datum==null) return false;
    else if(this.datum.getDay()==0 || this.datum.getDay()==1) return true;
    return false;
  }

  get IsWo(){
    if (this.datum==null) return false;
    else if(this.datum.getDay()==2) return true;
    return false;
  }

  get IsDoVr(){
    if (this.datum==null) return false;
    else if(this.datum.getDay()==3 || this.datum.getDay()==4) return true;
    return false;
  }

  get IsZaZo(){
    if (this.datum==null) return false;
    else if(this.datum.getDay()==5 || this.datum.getDay()==6) return true;
    return false;
  }

  _namen: string[]=[];
  
  
  VoegToe(){

    this._namen.push("Peeters");
    this._namen.push("Dams");
    this._namen.push("Masset");
    this._namen.push("Mariën");
    this._namen.push("Overdulve");

  }


}
