import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CouckeService {

  constructor(private http:HttpClient) { }
  
  getNewDataFromAPI(location:string)
  {
    return this.http.get<IData>(`https://api.teleport.org/api/countries/iso_alpha2%3A${location}/`)
  }
  
}

export interface CountryAdmin1Divisions {
  href: string;
}

export interface CountryContinent {
  href: string;
  name: string;
}

export interface CountrySalaries {
  href: string;
}

export interface Cury {
  href: string;
  name: string;
  templated: boolean;
}

export interface Self {
  href: string;
}

export interface Links {
  //country:admin1_divisions: CountryAdmin1Divisions;
  //country:continent: CountryContinent;
  //country:salaries: CountrySalaries;
  curies: Cury[];
  self: Self;
}

export interface IData {
  _links: Links;
  currency_code: string;
  geoname_id: number;
  iso_alpha2: string;
  iso_alpha3: string;
  name: string;
  population: number;
}


