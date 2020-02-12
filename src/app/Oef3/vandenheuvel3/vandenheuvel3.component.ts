import { Component, OnInit } from '@angular/core';
import { IRandomFact } from './vandenheuvel.service';
import { VandenheuvelService } from './vandenheuvel.service';

@Component({
  selector: 'app-vandenheuvel3',
  templateUrl: './vandenheuvel3.component.html',
  styleUrls: ['./vandenheuvel3.component.css']
})
export class Vandenheuvel3Component implements OnInit {
  public today:Date;
  day:number;
  month:number;
  Number: number;
  NumberGotten: number;
  NumberFact: string;
  GottenFact: boolean;
  FactGetter: IRandomFact;

  constructor(private FactService: VandenheuvelService) {
    this.today = new Date();
    this.day = this.today.getDay();
    this.month = this.today.getMonth();
    this.GottenFact = false;
    this.NumberFact = "";
    this.NumberGotten = 0;
  }

  GetFact() {
    this.GottenFact = true;
    if (this.Number != null){
    var NumbertoString = this.Number.toString();
    this.FactService.GetNumberFact(NumbertoString).subscribe((result => {this.NumberFact = result.text, this.NumberGotten = result.number}))
    }
    else {
      this.FactService.GetRandomFact().subscribe((result=>{this.NumberGotten = result.number, this.NumberFact = result.text}))
    }
  }

  ngOnInit() {
  }
  

}
