import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class VandrielService {

  constructor(private client: HttpClient) { }

  getFuckOff(): IFuck {
    return {
      "message": "Fuck application.",
      "subtitle": "- json",
    }
  }

  GetFuckOffFromAPI(naam: string, from: string) {
    //return this.client.get("https://foaas.com/off/" + naam + "/" + from + "?shoutcloud");
    return this.client.get("https://foaas.com/outside/"+naam+"/"+from+"");
  }

}

export interface IFuck {
  message: "Fuck application.",
  subtitle: "- json"
}
