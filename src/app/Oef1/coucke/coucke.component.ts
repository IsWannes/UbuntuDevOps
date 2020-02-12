import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-coucke',
  templateUrl: './coucke.component.html',
  styleUrls: ['./coucke.component.css']
})
export class CouckeComponent implements OnInit {

  FullName:string;
  FirstName:string;
  LastName:string;
  Verbetering:String;
  RandomNumber:number;
  Percentage:number = 0;

  constructor() 
  {
    this.FirstName = "Jordi";
    this.LastName = "Coucke";
    setInterval(() => this.LetsChangeThatNumber());
    setInterval(() => this.UpdatePercentage(),500);
  }

  ngOnInit() 
  {
  }

  GetFullName = () =>
  {
    return this.LastName + " " + this.FirstName;
  }

  LetsChangeThatNumber = () =>
  {
    this.RandomNumber = Math.random()*10;
  }

  GetVerbetering = () =>
  {
    this.Verbetering = "10/10";
  }

  UpdatePercentage = () =>
  {
    this.Percentage+=0.1;
  }


}
