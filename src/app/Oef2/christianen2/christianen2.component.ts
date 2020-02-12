import { Component, OnInit, Input } from '@angular/core';
import * as _ from "lodash"

@Component({
  selector: 'app-christianen2',
  templateUrl: './christianen2.component.html',
  styleUrls: ['./christianen2.component.css']
})
export class Christianen2Component implements OnInit {
//1
datum: Date;

constructor() {
  setInterval(() => this.datum = new Date(), 1000)
}

ngOnInit(): void {
    
}


get IsMorning()
{
  //bij de opstart zal de datum nog niet ingesteld zijn, pas na 2 seconden.
  if (this.datum == null) return false;
  return this.datum.getHours() < 12
}

get IsAfternoon()
{
  if (this.datum == null) return false;
  return this.datum.getHours() >= 12 && this.datum.getHours() < 18
}

get IsEvening()
{
  if (this.datum == null) return false;
  return this.datum.getHours() >= 18
}

//2
@Input() title: string = "Listing table";
  _items: string[] = [];
  item: string = "";

  get items()
  {
    return this._items;
  }

  Add()
  {
    this.items.push(this.item)
    this.item = "";
  }

  Delete(idx: number)
  {
    this.items.splice(idx, 1)
  }

}
