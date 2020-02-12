import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-shani',
  templateUrl: './shani.component.html',
  styleUrls: ['./shani.component.css']
})
export class ShaniComponent implements OnInit {

  bullet: number;
  shoot: number;
  imgURL1: string = "https://image.flaticon.com/icons/png/512/48/48826.png";
  imgURL2: string = "https://img.icons8.com/metro/452/firing-gun.png";
  imageUrl: string;
  mirror: string;
  output: string;
  time: Date;
  name: string;
  title: string;

  constructor() { 
    
    this.bullet = this.UpdateRandomValue();
    this.imageUrl = this.imgURL1;
    this.name = "usman shani";
    this.title = "russian roulette";
  }

  ngOnInit() {
  }

  random: number;

  UpdateRandomValue = () => {
    return this.random = _.random(1,6);
  }

  GenerateRandom = () => {
    this.shoot = _.random(1,6);
    if (this.shoot == this.bullet) {
      this.time = new Date();
      this.imageUrl = this.imgURL2;
      this.mirror = "fire";
      this.output = "Je hebt Maxime Minta beschoten om ";
    }
    else 
    {
      this.imageUrl = this.imgURL1;
      this.mirror = "";
      this.output = "Lucky";
    }

  }

}
