import { Component, OnInit } from '@angular/core';
import {VanopstalService} from './vanopstal.service';
import {VerschoorenService} from '../verschooren3/verschooren.service';
import { IAirDisplay } from '../verschooren3/verschooren3.component';

@Component({
  selector: 'app-vanopstal3',
  templateUrl: './vanopstal3.component.html',
  styleUrls: ['./vanopstal3.component.css']
})
export class Vanopstal3Component implements OnInit {

  ParentString: string = "Dit is Cedric Van Opstal zijn meesterwerk";
  BitcoinInfo : IbitcoinService;
  AirInfo: IAirDisplay;

  constructor(private bitcoinService: VanopstalService, private airService: VerschoorenService) { }

  DoSearch(){
    this.bitcoinService.GetData().subscribe((result) => {
      this.BitcoinInfo = {
        usdCode: result.bpi.USD.code,
        usdSymbol: result.bpi.USD.symbol,
        usdDescription: result.bpi.USD.description,
        usdRate: result.bpi.USD.rate,
        usdFloat: result.bpi.USD.rate_float,
        gbpCode: result.bpi.GBP.code,
        gbpSymbol: result.bpi.GBP.symbol,
        gbpDescription: result.bpi.GBP.description,
        gbpRate: result.bpi.GBP.rate,
        gpbFloat: result.bpi.GBP.rate_float,
        eurCode: result.bpi.EUR.code,
        eurSymbol: result.bpi.EUR.symbol,
        eurDescription: result.bpi.EUR.description,
        eurRate: result.bpi.EUR.rate,
        eurFloat: result.bpi.EUR.rate_float,
      }
    })
  }
  DoSearch2(city: string, state: string){
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

  ngOnInit() {
  }

}

export interface IbitcoinService{
  usdCode: string;
  usdSymbol: string;
  usdDescription: string;
  usdRate: string;
  usdFloat: number;
  gbpCode: string;
  gbpSymbol: string;
  gbpDescription: string;
  gbpRate: string;
  gpbFloat: number;
  eurCode: string;
  eurSymbol: string;
  eurDescription: string;
  eurRate: string;
  eurFloat: number;
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
