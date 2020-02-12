import { Component, OnInit } from '@angular/core';
import { Artiest } from './Artiest';

@Component({
  selector: 'app-van-goethem2',
  templateUrl: './van-goethem2.component.html',
  styleUrls: ['./van-goethem2.component.css']
})
export class VanGoethem2Component implements OnInit {
  public OmgekeerdeVolgorde : boolean = false;
  public InformatieBeschikbaar : boolean = false;
  public Verzenden : string = "Verstuur info";
  public teller : number = 0;
  Artiesten: Artiest[] = [];


  InfoVerstuurd(_naam: string, _geboortedatum: string, _woonplaats: string, _liedje: string) {
    this.Artiesten.push(new Artiest(_naam, _geboortedatum, _woonplaats, _liedje));
    this.InformatieBeschikbaar = true;
  }

  MuisOverTabel($event){
    this.OmgekeerdeVolgorde=true;
    this.teller++;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
