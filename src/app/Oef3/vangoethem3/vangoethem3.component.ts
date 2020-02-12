import { Component, OnInit } from '@angular/core';
import { VangoethemService } from './vangoethem.service';
import {VanopstalService} from '../vanopstal3/vanopstal.service';

@Component({
  selector: 'app-vangoethem3',
  templateUrl: './vangoethem3.component.html',
  styleUrls: ['./vangoethem3.component.css']
})

export class Vangoethem3Component implements OnInit {

  IdMeal: string = "52771"
  RecipeInfo: IRecipeDisplay;
  BitcoinInfo : IbitcoinService;


  constructor(private Recipe: VangoethemService,private bitcoinService: VanopstalService) { }
  SearchRecipe(IdMeal: string) {
    this.Recipe.GetData(IdMeal).subscribe((info) => {
      this.RecipeInfo = {
        strMeal: info.meals[0].strMeal,
        strArea: info.meals[0].strArea,
        strInstructions: info.meals[0].strInstructions
      };
    })
  }
  
  DoSearch(){
    this.bitcoinService.GetData().subscribe((result) => {
      this.BitcoinInfo = {
        usdCode: result.bpi.USD.code,
        usdSymbol: result.bpi.USD.symbol,
        usdDescription: result.bpi.USD.description,
        usdRate: result.bpi.USD.rate,
        usdFloat: result.bpi.USD.rate_float,
        gbpCode: result.bpi.GBP.code,
        gbpSymbol: result.bpi.GBP.symbol,
        gbpDescription: result.bpi.GBP.description,
        gbpRate: result.bpi.GBP.rate,
        gpbFloat: result.bpi.GBP.rate_float,
        eurCode: result.bpi.EUR.code,
        eurSymbol: result.bpi.EUR.symbol,
        eurDescription: result.bpi.EUR.description,
        eurRate: result.bpi.EUR.rate,
        eurFloat: result.bpi.EUR.rate_float,
      }
    })
  }

  ngOnInit() {
  }

}

export interface IRecipeDisplay {
  strMeal: any;
  strArea: string;
  strInstructions: string;
}

export interface IbitcoinService{
  usdCode: string;
  usdSymbol: string;
  usdDescription: string;
  usdRate: string;
  usdFloat: number;
  gbpCode: string;
  gbpSymbol: string;
  gbpDescription: string;
  gbpRate: string;
  gpbFloat: number;
  eurCode: string;
  eurSymbol: string;
  eurDescription: string;
  eurRate: string;
  eurFloat: number;
}
