import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VinkenService {

  constructor(private http : HttpClient) {}

  getInfo(random:number){
    return this.http.get<IShipInfo>("https://swapi.co/api/starships/" + random)
  }
}
interface IShipInfo{
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
