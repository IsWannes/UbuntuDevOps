import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaetenService {

  constructor(private client: HttpClient) { }

  GetRandomProgrammerJokeFromAPI(){
    return this.client.get<IJoke_API>("https://official-joke-api.appspot.com/jokes/programming/random")
  }

  GetRandomNormalJokeFromAPI(){
    return this.client.get<IJoke_API>("https://official-joke-api.appspot.com/jokes/random") 
  }
}

export interface IJoke_API{
  id: Number;
  type: String;
  setup: String;
  punchline: String;
}
