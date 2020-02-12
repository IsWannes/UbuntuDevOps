import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coucke2',
  templateUrl: './coucke2.component.html',
  styleUrls: ['./coucke2.component.css']
})
export class Coucke2Component implements OnInit {

  PuntenCoucke:number;
  PuntenAndere:number;
  Clicked:boolean;
  name1:string = "Coucke";
  name2:string = "De andere";
  option1:boolean;
  convertedName:string;
  newClass:string = "inline";
  namen:string[] = ["Jordi","Jordy"];

  constructor() 
  { 
    this.PuntenCoucke = 6;
    this.PuntenAndere = 0;
    this.Clicked = false;
    this.option1 = false;
    this.newClass = "inline";

  }

  ngOnInit() 
  {
    
  }

  UpVote = () =>
  {
    this.PuntenCoucke ++;
    this.Clicked = true;
  }

  UpVoteWrong = () =>
  {
    this.PuntenCoucke ++;
    this.Clicked = true;
  }

  NameChange2 = (event:any) =>
  {
    if(this.name1 == "Coucke" && this.option1 == false)
    {
      this.name1 = "De andere";
      this.name2 = "Coucke";
    }
  }

  NameChange = (event:any) =>
  {
    if(this.name1 == "De andere" && this.option1 == false)
    {
      this.name2 = "De andere";
      this.name1 = "Coucke";
    }
  }

  disableFunc = (event:any) =>
  {
    this.option1 = true;
    this.name1 = "Coucke";
    this.name2 = "<----";
    this.newClass = "inline3";
  }

  converter = (value) =>
  {
    this.convertedName = value+"ordi" 
  }


}
