import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class AbrarService {

  apiKey: string = "5f573b6cfgNKqx2rh1JP1pnqUbAjsFhmFL6ciLBbiJ8Ci8Am0GpHHvba";

  apiUrl: string = `https://api.happi.dev/v1/generate-password?apikey=5f573b6cfgNKqx2rh1JP1pnqUbAjsFhmFL6ciLBbiJ8Ci8Am0GpHHvba`;

  passLimit: string = `&limit=`;

  passLength: string = `&length=`;

  upperSymbols: string = `&num=1&upper=1&symbols=1`;

  yearAPI: string = "http://numbersapi.com/random/year?json";

  mathAPI: string = "http://numbersapi.com/random/math?json";

  triviaAPI: string = "http://numbersapi.com/random/trivia?json";

  dateAPI: string = "http://numbersapi.com/random/date?json";

  constructor(private service: HttpClient) { }

  GetData(length: number, limit: number) {
    return this.service.get<IPassword>(this.apiUrl + this.passLimit + limit + this.passLength + length + this.upperSymbols);
  }

  GetIYear() {
    return this.service.get<IWeetjes>(this.yearAPI);
  }

  GetIMath() {
    return this.service.get<IMath>(this.mathAPI);
  }

  GetITrivia() {
    return this.service.get<ITrivia>(this.triviaAPI);
  }

  GetIDate() {
    return this.service.get<IDate>(this.dateAPI);
  }
}

export interface IDate {
  text: string;
  number: string;
  type: string;
}

export interface IWeetjes {
  text: string;
  number: number;
  found: boolean;
  type: string;
}

export interface IMath {
  text: string;
  number: number;
  found: boolean;
  type: string;
}

export interface ITrivia {
  text: string;
  number: number;
  found: boolean;
  type: string;
}

export interface ISettings {
  numbers: boolean;
  symbols: boolean;
  uppercase: boolean;
}

export interface IPassword {
  success: boolean;
  length: number;
  settings: ISettings;
  passwords: string[];
}
