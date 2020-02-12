import { Component, OnInit } from '@angular/core';
import { FruhschulzService, Drink } from './fruhschulz.service';

@Component({
  selector: 'app-fruhschulz3',
  templateUrl: './fruhschulz3.component.html',
  styleUrls: ['./fruhschulz3.component.css']
})
export class Fruhschulz3Component implements OnInit {

  /*
    API request gebeurd pas na het drukken van de knop zodat wanneer een collega zijn applicatie test 
    deze niet altijd een API request moet doen.
  */
  strDrink : String; //Opgevraagde cocktail.
  randomNumber:  number;
  cocktailArray : Drink[];
  instruction : String; 
  ingredientsArray: String[]; //Bevat alle ingrediënten van de opgevraagde cocktail.
  strGlass : String; 
  cocktailAvailable : boolean = true; //Hulp variabele voor het tonen van de HTML elementen.
  drankKeuze:String; //Input keuze van de gebruiker aan de hand van de select tag (2-way binding).
  imageAvailable :boolean=false;
  imageSourceCocktail: String; 
  cocktailId : String;
  constructor(private drinkSvc : FruhschulzService) {  }
  getCocktail(){ //Opvraging van een lijst van cocktails aan de hand van een ingredient, keuze van een willekeurige cocktail hiervan en opvraging van extra info van deze cocktail.
    if (this.drankKeuze!=null){
      this.drinkSvc.CallGinDrink(this.drankKeuze).subscribe((result)=> {
        this.randomNumber = Math.floor((Math.random() * result.drinks.length) + 0);
        this.cocktailArray = result.drinks;
        this.strDrink = this.cocktailArray[this.randomNumber].strDrink;
        this.cocktailId=this.cocktailArray[this.randomNumber].idDrink;
        this.drinkSvc.CallIngredients(this.cocktailId).subscribe((ingredientResult) =>{
          this.formatData(ingredientResult.drinks);
        });      
         });
         this.cocktailAvailable=false;
    }
  }
  ngOnInit() {
    
  }

  formatData(da: Drink[]){ //Format data zodat deze makkelijk verwerkbaar is in de HTML Table Component.
    if(da[0].strDrinkThumb!=null){
      this.imageSourceCocktail = da[0].strDrinkThumb;
    }
    else if ((da[0].strDrinkThumb==null)){
      this.imageAvailable=false;
    }
    this.ingredient1 = da[0].strIngredient1;
    this.ingredient2 = da[0].strIngredient2;
    this.ingredient3 = da[0].strIngredient3;
    this.ingredient4 = da[0].strIngredient4;
    this.ingredient5 = da[0].strIngredient5;
    this.ingredient6 = da[0].strIngredient6;
    this.ingredient7 = da[0].strIngredient7;
    this.ingredient8 = da[0].strIngredient8;
    this.ingredient9 = da[0].strIngredient9;
    this.ingredient10 = da[0].strIngredient10;
    this.measurement1 = da[0].strMeasure1;
    this.measurement2 = da[0].strMeasure2;
    this.measurement3 = da[0].strMeasure3;
    this.measurement4 = da[0].strMeasure4;
    this.measurement5 = da[0].strMeasure5;
    this.measurement6 = da[0].strMeasure6;
    this.measurement7 = da[0].strMeasure7;
    this.measurement8 = da[0].strMeasure8;
    this.measurement9 = da[0].strMeasure9;
    this.measurement10 = da[0].strMeasure10;
    this.instruction = da[0].strInstructions;
    this.strGlass = da[0].strGlass;
    this.ingredients = [
      {id:1, ingredient: this.ingredient1, measurement: this.measurement1},
      {id:2, ingredient: this.ingredient2, measurement: this.measurement2},
      {id:3, ingredient: this.ingredient3, measurement: this.measurement3},
      {id:4, ingredient: this.ingredient4, measurement: this.measurement4},
      {id:5, ingredient: this.ingredient5, measurement: this.measurement5},
      {id:6, ingredient: this.ingredient6, measurement: this.measurement6},
      {id:7, ingredient: this.ingredient7, measurement: this.measurement7},
      {id:8, ingredient: this.ingredient8, measurement: this.measurement8},
      {id:9, ingredient: this.ingredient9, measurement: this.measurement9},
      {id:10, ingredient: this.ingredient10, measurement: this.measurement10},
    ]
  }
  
  ingredient1: String;
  ingredient2: String;
  ingredient3: String;
  ingredient4: String;
  ingredient5: String;
  ingredient6: String;
  ingredient7: String;
  ingredient8: String;
  ingredient9: String;
  ingredient10: String;
  measurement1: String;
  measurement2: String;
  measurement3: String;
  measurement4: String;
  measurement5: String;
  measurement6: String;
  measurement7: String;
  measurement8: String;
  measurement9: String;
  measurement10: String;
  ingredients;
}
