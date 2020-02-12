import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AouragheService {

  constructor(private http: HttpClient) { }
 

  GetApiCall(Data : string)
  {
    return this.http.get<IRootObject>(`https://newsapi.org/v2/everything?q=${Data}&apiKey=3290c1a7bf364d5186adb05af6ffc608`)
  }
}

export interface ISource {
  id: string;
  name: string;
}

export interface IArticle {
  source: ISource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export interface IRootObject {
  status: string;
  totalResults: number;
  articles: IArticle[];
}
