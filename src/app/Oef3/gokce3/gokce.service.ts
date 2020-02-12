import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GokceService {

  //CORS Bypass gebruikt
  // Link: string = `https://cors-anywhere.herokuapp.com/https://api.adorable.io/avatars/list`
  // Link: string = `https://raw.githubusercontent.com/GurselGokce/JSONTest/master/Avatars.json`
  // Link2 : string = "http://localhost:3000/avatars";


  Link: string = "https://raw.githubusercontent.com/GurselGokce/JSONTest/master/Avatars2.json";

  constructor(private client: HttpClient) { }

  GetAPI() {
    return this.client.get<IRoot>(this.Link);
  }


  //How to use GetAvatar:
  //mood kan 3 waardes hebben: happy, sad en suprised. Deze waardes werken enkel voor human/male/female.
  //Geef gewoon happy als mood als je een andere type wilt gebruiken dan human/male/female.
  //Waardes van Type: male, female, human, identicon, initials, bottts, avataaars, jdenticon, gridy
  //Type verandert welke soort avatar je terugkrijgt.
  //Bij naam kan je een random string ingeven bijvoorbeeld bij Initials als je België ingeeft, krijg je BE (de eerste 2 letters).
  //Naam verandert ook hoe jouw avatar eruit ziet bij male, female, ...
  GetAvatar(type : string, naam : string, mood : string){
    return `https://avatars.dicebear.com/v2/${type}/${naam}.svg?options[mood][]=${mood}`
  }

}

//Dicebears
export interface Male {
  mood: string[];
}

export interface Female {
  mood: string[];
}

export interface Human {
  mood: string[];
}

export interface Identicon {
}

export interface Initials {
}

export interface Bottts {
}

export interface Avataaars {
}

export interface Jdenticon {
}

export interface Gridy {
}

export interface Options {
  options: string[];
}

export interface IAvatars {
  male: Male;
  female: Female;
  human: Human;
  identicon: Identicon;
  initials: Initials;
  bottts: Bottts;
  avataaars: Avataaars;
  jdenticon: Jdenticon;
  gridy: Gridy;
  options: Options;
}

export interface IRoot {
  avatars: IAvatars;
}
//Dicebears

