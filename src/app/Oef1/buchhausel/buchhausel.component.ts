import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buchhausel',
  templateUrl: './buchhausel.component.html',
  styleUrls: ['./buchhausel.component.css']
})
export class BuchhauselComponent implements OnInit {

  public name :string = "Helga Buchhausel"
  public cities: Array<string> = ["Antwerp", "New York", "Moscow", "London", "Paris"];
  public rMin: Number = 0;
  public rMax: Number = 5;
  public reaction : string = ":|";
  public price : number = 8000;
  public price2 :number = 528822;

  public random: number;

  //Deze functie niet aanroepen vanuit interpolation ! geeft fouten in dev console
  public  randomNumber() { 
    return Math.floor(Math.random() * (500- 0 + 1) + 0);
  }

  public sad = () => this.reaction = "hahah";
  
  public happy = () => this.reaction = "yuhee";

  public ShowTheMsg = () => window.alert(this.reaction); 

  constructor() {
    this.random = this.randomNumber();
   }

  ngOnInit() {


  }



}
