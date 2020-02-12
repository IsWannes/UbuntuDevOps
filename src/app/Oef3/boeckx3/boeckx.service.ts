import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoeckxService {

  constructor(private http: HttpClient) 
  { 
  }

  GetRandomnameBelgiumFromAPI(){
    return this.http.get<IRandomNameAPI>("https://uinames.com/api/?region=belgium")
  }

  GetRandomnameGermanyFromAPI(){
    return this.http.get<IRandomNameAPI>("https://uinames.com/api/?region=germany")
  }

}

export interface IRandomNameAPI{
  name: String;
  surname: String;
  gender: String;
  region: String;
}