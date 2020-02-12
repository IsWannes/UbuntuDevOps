import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/Http';


@Injectable({
  providedIn: 'root'
})
export class TobbackService {

  constructor(private http: HttpClient) { }

  GetHolidays(country:String,year:number){
    return this.http.get<RootObject>(`https://calendarific.com/api/v2/holidays?&api_key=f74f8861805d3cd1f57037f1daafa90e91545ec3&country=${country}&year=${year}`)
  }
}

  export interface Meta {
      code: number;
  }

  export interface Datetime {
      year: number;
      month: number;
      day: number;
  }

  export interface Date {
      iso: string;
      datetime: Datetime;
  }

  export interface Holiday {
      name: string;
      description: string;
      date: Date;
      type: string[];
  }

  export interface Response {
      holidays: Holiday[];
  }

  export interface RootObject {
      meta: Meta;
      response: Response;
  }