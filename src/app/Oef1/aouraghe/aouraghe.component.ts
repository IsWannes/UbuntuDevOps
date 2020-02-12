import { Component, OnInit,NgModule } from '@angular/core';
import * as _ from "lodash";
import { klas } from "../aouraghe/klas";
import { SqrtPipe } from '../aouraghe/Vierkantswortel';

@NgModule({
  declarations: [SqrtPipe],
  exports: [SqrtPipe]
})

@Component({
  selector: 'app-aouraghe',
  templateUrl: './aouraghe.component.html',
  styleUrls: ['./aouraghe.component.css'],
  
  
})

export class AouragheComponent implements OnInit {
  public name = "Ayoub Aouraghe";
  klas:klas;
  Tijd:Date;
  toggle = true;
  

  get format()   { return this.toggle ? 'Speciale' : 'verrassing'; }
  toggleFormat() { this.toggle = !this.toggle; }

  
  verjaardag = new Date(1998, 3, 15);
  constructor() {
    this.Setklas();
    setInterval(this.UpdateRandomValue,1000);
    this.DatePipe();
  }

  Setklas = () => {
    this.klas = new klas();
    this.klas.klasname ="2ea2";
    this.klas.Title = "klas groep";
  }

  DatePipe =()=>{
    this.Tijd = new Date();
  }

  random: number;
  random2:number;
  getal:number;
  UpdateRandomValue = () =>{
    this.random = _.random(1,100);
    this.random2 = _.random(1,70);
    this.getal = this.random * this.random2;

  }

  ngOnInit() {
  }

}
