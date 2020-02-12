import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vandenheuvel3Component } from './vandenheuvel3.component';

@Injectable({
  providedIn: 'root'
})
export class VandenheuvelService {

  constructor(private client: HttpClient) { }
  
  GetNumberFact = (NumberWanted:String) => {
    return this.client.get<IRandomFact>("https://numbersapi.com/"+NumberWanted+"?json")
  }

  GetDailyFact = (day:string, month: string) => {
    return this.client.get<IRandomFact>("http://numbersapi.com/"+ month + "/" + day + "/date?json")
  }

  GetRandomFact = () => {
    return this.client.get<IRandomFact>("https://numbersapi.com/random")
  }
}

export interface IRandomFact{
  text: string;
  found: boolean;
  number: number;
  type: string;
}