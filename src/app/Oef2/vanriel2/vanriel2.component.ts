import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

export class Valuta{
  Name: String | null;
  Value: number | null;
  constructor(name, val){
    this.Name = name;
    this.Value = val;
  }
}

export class Donate{
  cause: String = null;
  value: number = null;
  card: String = null;
  cardexp: String = null;
  cardcvc: number = null;
}

@Component({
  selector: 'app-vanriel2',
  templateUrl: './vanriel2.component.html',
  styleUrls: ['./vanriel2.component.css']
})

export class Vanriel2Component implements OnInit {
  public counter: number = 0;
  public valutas: Valuta[] = [];
  public donation: Donate = new Donate();
  public showDonation = false;
  public gotcha = false;
  public lastKey: String = "no key pressed";
  public sum: number = 0;

  constructor() {
    setInterval(this.UpdateCounter, 1000);
    this.valutas[0] = new Valuta("EURO", 1.0);
    this.valutas[1] = new Valuta("Dollar", 1.11);
   }

   KeyboardAction(event: KeyboardEvent): void{
     this.lastKey = event.key.toString();
   }

   Calculate(get1, get2){
    this.sum = parseFloat(get1) + parseFloat(get2);
   }

   UpdateCounter = () =>{
    this.counter++;
   }

   donate = () =>{
     if(this.donation.value!=null && this.donation.card!=null && this.donation.cardcvc!=null && this.donation.cardexp!=null && this.donation.cause!=null){
      this.showDonation = true;
     }
   }

   edit = () =>{
     this.showDonation = false;
   }

   disappear = () =>{
    this.gotcha = true;
   }

  ngOnInit() {
  }






}
