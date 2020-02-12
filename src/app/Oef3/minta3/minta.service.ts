import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBoredServiceInfo } from './minta3.component';


@Injectable({
  providedIn: 'root'
})
export class MintaService {

  constructor(private http : HttpClient) { }

  GetData()
  {    
    
    return this.http.get<IBoredInfo>("https://www.boredapi.com/api/activity/");
    
  }
  SearchActivity = (key:number) => {
return this.http.get<IEnableSearch>("http://www.boredapi.com/api/activity?key=" + key);
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

export interface IBoredInfo{

//Data van api
activity:string;
type:string;
participants:number;
price:number;
key:number;

}
