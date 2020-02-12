import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FruhschulzService {
  drankKeuze:String;
  constructor(private _http: HttpClient) { }
  CallGinDrink(s: String){
    return this._http.get<IDrink>("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="+s);
  }
  CallIngredients(s : String){
    return this._http.get<IDrink>("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+s);
  }
  LogInput(s: String){
      console.log(s);
  }
}
export interface Drink {
  strDrink: string;
  idDrink: string;
  strDrinkAlternate?: any;
  strDrinkES?: any;
  strDrinkDE?: any;
  strDrinkFR?: any;
  strCategory: string;
  strIBA?: any;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5?: any;
  strIngredient6?: any;
  strIngredient7?: any;
  strIngredient8?: any;
  strIngredient9?: any;
  strIngredient10?: any;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5?: any;
  strMeasure6?: any;
  strMeasure7?: any;
  strMeasure8?: any;
  strMeasure9?: any;
  strMeasure10?: any;
}

export interface IDrink {
  drinks: Drink[];
}

