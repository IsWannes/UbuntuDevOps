import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class YilmazService {

  API_KEY : string ="077bf21db296463cc7d3a592a80d3382";
  URL : string = `http://api.languagelayer.com/detect?access_key=${this.API_KEY}`;


  constructor(private client: HttpClient) { }

  GetApiCall(Input : string)
  {
    return this.client.get<IRoot>(this.URL+ `&query=${Input}`);
  }

  GetApiCallToPromise(Input : string)
  {
    return this.client.get<IRoot>(this.URL+ `&query=${Input}`).toPromise();
  }


}

export interface IRoot {
  success: boolean;
  results: IResultaat[];
}

export interface IResultaat {
  language_code: string;
  language_name: string;
  probability: number;
  percentage: number;
  reliable_result: boolean;
}


