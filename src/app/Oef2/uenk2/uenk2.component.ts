import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uenk2',
  templateUrl: './uenk2.component.html',
  styleUrls: ['./uenk2.component.css']
})
export class Uenk2Component implements OnInit {

  cookies: number = 0;
  clickerRequired: number = 5;
  clickers: number = 1;
  cookieImageUrl: string = "https://vignette.wikia.nocookie.net/cookieclicker/images/5/5a/PerfectCookie.png/revision/latest?cb=20130827014912";
  purchases: string[] = [];
  hover: boolean = false;
  buttonContent: string = "Koop een extra klikker";

  constructor() { 
  }

  ngOnInit() {
  }

  Increment = () => {
    this.cookies += this.clickers;
    console.log(this.cookies);
  }

  PurchaseClicker = () => {
    if (this.cookies < this.clickerRequired)
    {
      alert("Je hebt nog " + (this.clickerRequired - this.cookies) + " cookies nodig om dit te kopen")
    }
    else
    {
      this.purchases.push("+ 1 Clicker voor " + this.clickerRequired + " cookies");
      this.cookies -= this.clickerRequired;
      this.clickers++;
      this.clickerRequired *= 2;
    }

    console.log(event);
  }
}
