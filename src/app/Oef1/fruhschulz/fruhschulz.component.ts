import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruhschulz',
  templateUrl: './fruhschulz.component.html',
  styleUrls: ['./fruhschulz.component.css']
})
export class FruhschulzComponent implements OnInit {

  claencyName: string = "Claency Fruhschulz";
  claencyDate = new Date(1997,3,18);
  counterNumber: number = 0;
  
  constructor() {
    setInterval(this.getNextPrimeNumber, 1000);
   }

  ngOnInit() {
  }


  getNextPrimeNumber = () => 
  {
    this.counterNumber+=5;
  }
}
