import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerschoorenService {

 

  constructor(private http : HttpClient) { }

  GetData(city, State){
    return this.http.get<ILocationInfo>(`http://api.airvisual.com/v2/city?city=${city}&state=${State}&country=Belgium&key=16bc30ba-9a03-4068-a7fd-4b8ec85d813f`)
  }
}
export interface ILocationInfo{
  status: string;
  data: IData;
}

export interface IData{
  city: string;
  state: string;
  country: string;
  current: ICurrent;

}
export interface ICurrent{
  weather: IWeather;
  pollution: IPollution;
}
export interface IWeather{
  ts: string;
  tp: number;
  pr: number;
  hu: number;
  ws: number;
  wd: number;
  ic: string;
}
export interface IPollution{
  ts: string;
  aqius: number;
  mainus: string;
  aqicn: number;
  maincn: string;
}
