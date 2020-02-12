import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-gokce',
  templateUrl: './gokce.component.html',
  styleUrls: ['./gokce.component.css']
})

export class GokceComponent implements OnInit {

  Naam : string = "Gursel Gokce";
  numtest : number = 0;
  
  USD:number=1.1109;
  TL:number=6.3807;
  EUR:number=1.00;

  TLSim:number=6.3807;


  //Random Rock Paper Scissors Game:
  myArray = ['rock','paper','scissors']

  rps:string = "x";
  rpsP1: string = "x";
  rpsP2:string = "x"; 

  date:Date;

  


  constructor() {
    this.date=new Date();
    setInterval(()=>{
      this.date=new Date();
    },1000);
    setInterval(() => this.TLSim+=_.random(0.01,0.5),800);
    this.RandomRPS();
    

   }


   //Button Random Rock Paper Scissors:
  // (nota van SM: moet public zijn aangezien het vanuit de HTML template wordt aangeroepen)
   public RandomRPS = () => {
    this.rpsP1 =  this.myArray[_.random(this.myArray.length-1)];
    this.rpsP2 =  this.myArray[_.random(this.myArray.length-1)];
  
    this.rps = compare(this.rpsP1,this.rpsP2);  
  }
  
  ngOnInit() {
  }

}

//Function Random Rock Paper Scissors:
var compare = function (choice1, choice2) {
  if(choice1 === choice2) 
  {return "Tie!";}
  
  else if(choice1 === "rock") 
      if (choice2 === "scissors") 
      {return "rock wins";}
      else 
      {return "paper wins";}
  else if (choice1 === "paper")
      if (choice2 === "rock")
      {return "paper wins";}
      else
      {return "scissors wins";}
  else if (choice1 === "scissors")
      if (choice2 === "rock")
      {return "rock wins";}
      else
      {return "scissors wins";}
   };