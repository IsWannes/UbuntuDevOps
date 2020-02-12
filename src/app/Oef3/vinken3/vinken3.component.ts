import { Component, OnInit } from '@angular/core';
import { DejongheService } from '../dejonghe3/dejonghe.service';
import { VinkenComponent } from 'src/app/Oef1/vinken/vinken.component';
import { VinkenService } from './vinken.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-vinken3',
  templateUrl: './vinken3.component.html',
  styleUrls: ['./vinken3.component.css']
})
export class Vinken3Component implements OnInit {
  //Api & Services
  ShipInfo : IShipInfo;
  CharacterInfo : Array<IStarWarsPersonDisplay>  = new Array<IStarWarsPersonDisplay>();
  _character : string;
  random : number = 1;
  _shiprandom
  shipNumbers : Array<number> = [2,3,9,10,11,12,13,15,17,21,22,27,28,29,31,32,39,40,48,58,59,66] ; //De api heeft gaten in de lijst met geen spaceship informatie in, dus ik kan niet gewoon een random doorsturen.
  SearchCharacter(){
    this.starwarsCharacterInfo.getDetail(this._character).subscribe((result) =>{
      this.CharacterInfo = [];
      this.CharacterInfo = result.results;
    })
  }
  getShip(){
    this.updateValue();
    this.shipInfo.getInfo(this._shiprandom).subscribe((result) =>{
      this.ShipInfo= {
        name: result.name,
        model : result.model,
        manufacturer: result.manufacturer,
        cost_in_credits: result.cost_in_credits,
        length: result.length,
        max_atmosphering_speed: result.max_atmosphering_speed,
        crew: result.crew,
        passengers: result.passengers,
        cargo_capacity: result.cargo_capacity,
        consumables: result.consumables,
        hyperdrive_rating: result.hyperdrive_rating,
        MGLT: result.MGLT,
        starship_class: result.starship_class
      }
    })
    this.ShipExists = true;
  }
  //Variables:
  ShipExists : boolean = false;
  SubTitle : string = "Make your own lightsaber here:"
  mainUrl : string = "../../../assets/images/vinken3/Lightsaber1/"
  Url : string ;

  TurnedOn : boolean = false;
  //Methods
  updateValue = () =>{
    this.random = _.random(1,24);
    this._shiprandom = this.shipNumbers[this.random];
  }
  //lists
  public colors = [
    {color: 'Blue'},
    {color: 'Red'},
    {color: 'Green'},
    {color: 'Purple'},
    {color: 'Gold'},
    {color: 'White'}
  ]
  color_choice: string = "Blue";
  public materials = [
    {material: 'Grey'},
    {material: 'Black'},
    {material: 'Wooden'}
  ]
  material_choice: string = "Grey";
  //Images Methods:
  public SaberUrl : string = "../../../assets/images/vinken3/Lightsaber1/Lightsaber1_Off_GreyHilt.png";
  
  Change = () =>{
    this.TurnedOn = false;
    this.UpdateLightsaber();
  }
  UpdateLightsaber = () =>{
    if(!this.TurnedOn){
      this.Url = this.mainUrl + "Lightsaber1" + "_" + "Off" + "_" + this.material_choice + "Hilt.png";
    } 
    else{
      this.Url = this.mainUrl + "Lightsaber1" + "_" + this.material_choice + "Hilt" + "_" + this.color_choice + ".png";
    }


    this.SaberUrl = this.Url;
  }
  Ignite = () =>{
    this.TurnedOn = true;
    this.UpdateLightsaber();
  }
  //Constructor & Init
  constructor(private starwarsCharacterInfo : DejongheService, private shipInfo : VinkenService) {}

  ngOnInit() {
  }
  
}
export interface IStarWarsPersonDisplay{
  name:string;
  height:number;
  mass:number;
  hair_color:string;
  skin_color:string;
  eye_color:string;
  birth_year:number;
  gender:string;
}
export interface IShipInfo{
  name: string,
  model : string,
  manufacturer: string,
  cost_in_credits: number,
  length: number,
  max_atmosphering_speed: string,
  crew: number,
  passengers: number,
  cargo_capacity: number,
  consumables: string,
  hyperdrive_rating: string,
  MGLT: number,
  starship_class: string

}
