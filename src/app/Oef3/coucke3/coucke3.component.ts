import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-coucke3',
  templateUrl: './coucke3.component.html',
  styleUrls: ['./coucke3.component.css'],
  
})
export class Coucke3Component implements OnInit {

  plaats:String = "plaats";
  population:number;
  name:string;
  currency:String;

  constructor() 
  { 
    this.plaats = "plaats";
  }

  ngOnInit() 
  {
  }

  ChangePlace = (value) => 
  {
    this.plaats = value;
  }



}
