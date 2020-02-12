import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-van-goethem',
  templateUrl: './van-goethem.component.html',
  styleUrls: ['./van-goethem.component.css']
})

export class VanGoethemComponent implements OnInit {
   
   naam : string = "Jens Van Goethem";
   date : Date;
   teller : number = 0;
   kliks : number = 0;
   Randomgetal : number;

  constructor() { 

  setInterval(()=>{this.date = new Date()},1000);
  setInterval(()=> this.teller++, 60000);
  setInterval(() => this.VeranderGetal(),2000);
  }

  Klikstoevoegen = () => {

    this.kliks = this.kliks +1;

  }

  VeranderGetal = () =>
  {
    this.Randomgetal = Math.random()*1000;
  }

  ngOnInit() {
  }

}

