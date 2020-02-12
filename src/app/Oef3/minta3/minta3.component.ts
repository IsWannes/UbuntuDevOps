import { Component, OnInit } from '@angular/core';
import { MintaService } from './minta.service';

@Component({
  selector: 'app-minta3',
  templateUrl: './minta3.component.html',
  styleUrls: ['./minta3.component.css']
})
export class Minta3Component implements OnInit {

  BoredServiceDisplayInfo:IBoredServiceInfo;
  EnableBoredSearch:IEnableSearch;
  ParentMessage: string = "Service van een andere student";
  currTitle : string = "Bored?";

//iets uit de child halen

changeTitle = () => 
  {
    if(this.currTitle=="Bored?") this.currTitle="Let's find something to do!"; 
    else if(this.currTitle=="Let's find something to do!") this.currTitle="Bored?";
  }

  EnableSearch= (activityKey: number) =>{
    this.boredService.SearchActivity(activityKey).subscribe((result) =>{     
      this.EnableBoredSearch ={
        activity : result.activity,
        type : result.type,
        participants:result.participants,
        price: result.price,
        key: result.key
      }

    })
    
  }

  constructor(private boredService: MintaService) {
    this.boredService.GetData().subscribe((result) =>{
      //console.log(result);                 
      this.BoredServiceDisplayInfo ={
        activity : result.activity,
        type : result.type,
        participants:result.participants,
        price: result.price,
        key: result.key 
      };     
      });

    setInterval(this.changeTitle,1500);
  }

  ngOnInit() {
    
  }

}

export interface IEnableSearch{
 
  //Data van api
activity:string;
type:string;
participants:number;
price:number;
key:number;

}

export interface IBoredServiceInfo
{

//Data van api
activity:string;
type:string;
participants:number;
price:number;
key:number;

}