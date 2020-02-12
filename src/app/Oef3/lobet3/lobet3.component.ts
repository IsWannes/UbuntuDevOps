import { Component, OnInit } from '@angular/core';
import { Ipokedex, Idexes, LobetService, ISinglePokemon, IAbility } from './lobet.service';
import { MartensService, Memes, Meme } from '../martens3/martens.service';

@Component({
  selector: 'app-lobet3',
  templateUrl: './lobet3.component.html',
  styleUrls: ['./lobet3.component.css']
})


export class Lobet3Component implements OnInit {

  //otherapi
  memes:Memes;
  singlememe: Meme;
  //eigen project
  alldexes: Idexes;
  pokedex: Ipokedex;
  abilitiesforchild: IAbility;
  pokemonforchild: ISinglePokemon;
  pokemon: ISinglePokemon;
  selectedOption: string;
  selecteddex: string;
  selectedpokemon: string;
  chosendex: boolean = false;
  Clickablepicture: boolean = false;
  teamfull: boolean = false;
  showchild: boolean = false;
  showaddbutton: boolean = false;
  showdelbutton: boolean = false;

  pokemonteam: ISinglePokemon[] = [];
  temparray: number[] = [];

  constructor(private lobetsvc: LobetService,private othersvc: MartensService ) { }

  ngOnInit() {
    this.othersvc.getMeme().subscribe(result => this.memes = result);
    this.lobetsvc.getallpokedex().subscribe(result => this.alldexes = result);
  }

  getdex = () => {
    this.chosendex = true;
    this.selecteddex = (<HTMLInputElement>document.getElementById("dexselect")).value;
    this.lobetsvc.getpokedex(this.selecteddex).subscribe(result => this.pokedex = result);
  }

  getpokemon = () => {
    this.showaddbutton = true;
    this.selectedpokemon = (<HTMLInputElement>document.getElementById("pokemonselect")).value;
    this.lobetsvc.getpokemon(this.selectedpokemon).subscribe(result => this.pokemon = result);
  }

  getpokemondata = (pokemon: ISinglePokemon) => {
    if (this.pokemonteam.length > 0)
      this.showchild = true;
    else
      this.showchild = false;

    this.lobetsvc.getpokemon(pokemon.name).subscribe(result => this.pokemonforchild = result);
  };

  addpokemon = () => {
    if (this.pokemonteam.length != 6) {
      this.pokemon.checked = false;
      this.pokemonteam.push(this.pokemon);
    }
    else
      this.teamfull = true;

    this.checkshowcontent();
  };
  DeletePokemon = () => {
    for (let i = 0; i < this.pokemonteam.length; i++) {
      if (this.pokemonteam[i].checked) {
        this.temparray.push(i)
      }
    }
    // zorgt ervoor dat je van achter begint te verwijderen, dan klopt de volgorde van de array nog
    this.temparray.reverse();
    if (this.temparray.length != 0) {
      for (let j = 0; j < this.temparray.length; j++) {
        this.pokemonteam.splice(this.temparray[j], 1)
      }
    }
    //maakt temparray leeg
    while (this.temparray.length) {
      this.temparray.pop();
    }
    this.checkshowcontent();
  };
  deletefullteam = () => {
    while (this.pokemonteam.length) {
      this.pokemonteam.pop();
    }
    this.checkshowcontent();
  };
  checkshowcontent = () => {
    if (this.pokemonteam.length != 6) {
      this.showaddbutton = true;
      this.teamfull = false;
    }
    else {
      this.showaddbutton = false;
      this.teamfull = true;
    }
    if (this.pokemonteam.length != 0) {
      this.showdelbutton = true;
      this.Clickablepicture = true;
    }
    else {
      this.showdelbutton = false;
      this.showchild = false;
      this.Clickablepicture = false;
    }
  };
  getmeme=()=>{
    this.singlememe = this.memes.data.memes[Math.floor(Math.random() * this.memes.data.memes.length)]
  }
}
