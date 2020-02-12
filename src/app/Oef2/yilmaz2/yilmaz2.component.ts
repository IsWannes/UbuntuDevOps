import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yilmaz2',
  templateUrl: './yilmaz2.component.html',
  styleUrls: ['./yilmaz2.component.css']
})
export class Yilmaz2Component implements OnInit {

  public BoodschappenLijst : string[] = [];
  Placeholder : string = "Product hier schrijven";
  Counter:number = 1;
  ButtonStatus = true;
  Waarde : String = "";

  constructor() { 

    

  }

  ngOnInit() {
  }

  public ChangeStyle(Value : any){

    var currentIndex = this.BoodschappenLijst.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = this.BoodschappenLijst[currentIndex];
      this.BoodschappenLijst[currentIndex] = this.BoodschappenLijst[randomIndex];
      this.BoodschappenLijst[randomIndex] = temporaryValue;
    }
  
  }

  public AddList(Value : string)
  {

    if(this.Counter == 1)
      this.BoodschappenLijst.push(Value + ", Hoog");
    else
      this.BoodschappenLijst.push(Value + ", Laag");
  } 

  public ResetLijst()
  {

    this.BoodschappenLijst = [];

  }


}
