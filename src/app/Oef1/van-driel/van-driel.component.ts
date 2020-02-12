
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-van-driel',
  templateUrl: './van-driel.component.html',
  styleUrls: ['./van-driel.component.css']
})
export class VanDrielComponent implements OnInit {
  naam:string = "Kevin van Driel";

  constructor() 
  { 
    setInterval(this.RefreshTime,1000)
    setInterval(this.GenerateRandom,2000);
  }

  ngOnInit() {
  }

  CurrentTime : Date;
  RefreshTime = () => {
    this.CurrentTime = new Date();
  }


  toggle = true;
  get format()   
  { 
    return this.toggle ? 'short' : 'long'; 
  }
  toggleFormat() 
  { 
    this.toggle = !this.toggle; 
  }


  randomNumber : number = null ;
  GenerateRandom = () => {
    this.randomNumber = (Math.random() * 100);
  } 

}

