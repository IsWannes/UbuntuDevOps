import { Component, OnInit, Input } from '@angular/core';
import { VerschoorenService } from './verschooren.service';
import { MintaService } from '../minta3/minta.service';

@Component({
  selector: 'app-verschooren3',
  templateUrl: './verschooren3.component.html',
  styleUrls: ['./verschooren3.component.css']
})
export class Verschooren3Component implements OnInit {

  city : string = ""
  State : string = "Flanders"
  AirInfo: IAirDisplay;
  BoredInfo: IBoredDisplay;
  ParentString: string = "Check Your Air Data Here";

  constructor(private airService: VerschoorenService, private mintaservice: MintaService) {}
  DoSearch(city: string, state: string){
    this.airService.GetData(city, state).subscribe((result) => {
      this.AirInfo = {
        status: result.status,
        city: result.data.city,
        state: result.data.state,
        country: result.data.country,
        humidity: result.data.current.weather.hu,
        temperature: result.data.current.weather.tp,
        presure: result.data.current.weather.pr,
        aqius: result.data.current.pollution.aqius
      }
    })
  }
  DoSearch2(){
    this.mintaservice.GetData().subscribe((result) => {
      this.BoredInfo = {
      activity: result.activity,
      type: result.type,
      participants: result.participants,
      price: result.price,
      key: result.key
      }
    })
  }

  ngOnInit() {
  }

}
export interface IBoredDisplay{
  activity:string;
  type:string;
  participants:number;
  price:number;
  key:number;
}
export interface IAirDisplay{
  status: string;
  city: string;
  state: string;
  country: string;
  humidity: number;
  temperature: number;
  presure: number;
  aqius: number;
  
}
