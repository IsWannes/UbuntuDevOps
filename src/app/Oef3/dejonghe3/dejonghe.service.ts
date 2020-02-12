import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlockableUI } from 'primeng/components/common/blockableui';

@Injectable({
  providedIn: 'root'
})
export class DejongheService {

  constructor(private http:HttpClient) { }

  getDetail(searchTerm:string){
    return this.http.get<Isearch>("https://swapi.co/api/people/?search="+searchTerm)
  }
}

interface Iinfo{
  name:string;
  height:number;
  mass:number;
  hair_color:string;
  skin_color:string;
  eye_color:string;
  birth_year:number;
  gender:string;
}
interface Isearch{
  results:Array<Iinfo>;
}
