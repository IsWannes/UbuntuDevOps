import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VanopstalService {

  constructor(private http : HttpClient) { }

  GetData(){
    return this.http.get<ICoinRankingInfo>(`https://api.coindesk.com/v1/bpi/currentprice.json`)
  }
}
export interface ICoinRankingInfo{
  bpi: Ibpi;
}
export interface Ibpi{
  USD: Iusd;
  GBP: Igbp;
  EUR: Ieur;
}
export interface Iusd{
  code: string,
  symbol: string,
  rate: string,
  description: string,
  rate_float: number
}
export interface Igbp{
  code: string,
  symbol: string,
  rate: string,
  description: string,
  rate_float: number
}
export interface Ieur{
  code: string,
  symbol: string,
  rate: string,
  description: string,
  rate_float: number
}