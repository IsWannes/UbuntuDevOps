import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yoncalik',
  templateUrl: './yoncalik.component.html',
  styleUrls: ['./yoncalik.component.css']
})
export class YoncalikComponent implements OnInit {


  teller : number = 1;
  naam : string;
  procent : number = 1;
  datum : Date;

  constructor() {     
         
    setInterval(() => this.teller*=2,200)
    setInterval(() => this.naam = "Arafa Yoncalik")
    setInterval(()=> this.procent = 1)    
    setInterval(() => {this.datum = new Date()}, 1);
    
  }

  birthday = new Date(1999, 5,30);
  toggle = true; 

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

 


  ngOnInit() {
  }







}
