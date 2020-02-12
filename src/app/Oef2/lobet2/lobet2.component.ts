import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lobet2',
  templateUrl: './lobet2.component.html',
  styleUrls: ['./lobet2.component.css']
})
export class Lobet2Component implements OnInit {

  ShowName = true;
  ShowNumber = true;
  ShowType1 = true;
  ShowType2 = true;
  bluebackground = "blueback";
  redbackground = "redback";
  colorclass:string;
  count:number;

  baseurl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  imgsrc:string;
  pokemonlist: pokemon[] = [];

  constructor() { 
    this.pokemonlist.push(new pokemon("Bulbasaur",1,"Grass","Poison"))
      this.pokemonlist.push(new pokemon("Ivysaur",2,"Grass","Poison"))
      this.pokemonlist.push(new pokemon("Venusaur",3,"Grass","Poison"))
      this.pokemonlist.push(new pokemon("Charmander",4,"Fire","N/A"))
      this.pokemonlist.push(new pokemon("Charmeleon",5,"Fire","N/A"))
      this.pokemonlist.push(new pokemon("Charizard",6,"Fire","Flying"))
      this.pokemonlist.push(new pokemon("Squirtle",7,"Water","N/A"))
      this.pokemonlist.push(new pokemon("Wartortle",8,"Water","N/A"))
      this.pokemonlist.push(new pokemon("Blastoise",9,"Water","N/A"))
  }

  ngOnInit=()=> {
  }

  setred=()=>{
    this.colorclass = this.redbackground
  }

  setblue=()=>{
    this.colorclass = this.bluebackground
  }

  

  GetPicture=(nr:number)=>{
    this.imgsrc = this.baseurl + nr + ".png";
  }

}



class pokemon{
  private Naam:string;
  private Number:number;
  private Type1:string;
  private Type2:string;

  constructor(name:string,nr:number,typeuno:string,typedeux:string)
  {
    this.Naam = name;
    this.Number = nr;
    this.Type1 =typeuno;
    this.Type2 = typedeux

  }
}
