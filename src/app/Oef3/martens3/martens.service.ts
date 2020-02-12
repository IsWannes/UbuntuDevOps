import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MartensService {

  private ChosenId: string = "";
  private memestring: string = "https://api.imgflip.com/get_memes";

  constructor(private http: HttpClient) { 
    
  }

  getMeme(): Observable<Memes> {
      return this.http.get<Memes>(this.memestring)
  }
  

}

  export interface Meme {
      id: string;
      name: string;
      url: string;
      width: number;
      height: number;
      box_count: number;
  }

  export interface Data {
      memes: Meme[];
  }

  export interface Memes {
      success: boolean;
      data: Data;
  }




