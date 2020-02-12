import { Component, OnInit } from '@angular/core';
import * as _ from "lodash"

@Component({
  selector: 'app-van-rysselberghe',
  templateUrl: './van-rysselberghe.component.html',
  styleUrls: ['./van-rysselberghe.component.css']
})
export class VanRysselbergheComponent implements OnInit {

  naam:string
  xPos:string
  yPos:string
  x:number
  y:number
  teller:number
  geslaagdTeller:number
  slaagkans:number
  datum:Date

  constructor() { 
    this.naam = "lennert van rysselberghe"
    this.xPos="0%"
    this.yPos="0%"
    this.teller=0;
    this.geslaagdTeller=0;
    this.slaagkans=0;

    this.datum = new Date()
  }

  ngOnInit() {
  }

  RandomPositie(): void{
    this.ChooseNewX();
    this.ChooseNewy();

    this.xPos=this.x + "%"
    this.yPos=this.y + "%"

    this.teller++;
  }

  ChooseNewX = () => this.x = _.random(4, 6) * 10;
  ChooseNewy = () => this.y = _.random(6, 10) * 10;

  Geklikt(){
    this.geslaagdTeller++;
    this.slaagkans=this.geslaagdTeller/this.teller

    this.RandomPositie();
  }

}
