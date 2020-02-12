
import { CouckeService } from '../coucke.service';
import { Component, OnInit, Input } from '@angular/core';
import { TobbackChildComponent } from '../../tobback3/tobback-child/tobback-child.component';
import { LobetService } from '../../lobet3/lobet.service';
import { BoeckxService } from '../../boeckx3/boeckx.service';
@Component({
  selector: 'app-coucke-child',
  templateUrl: './coucke-child.component.html',
  styleUrls: ['./coucke-child.component.css']
})
export class CouckeChildComponent implements OnInit {
  population:number;
  name:string;
  currency:string;
  surname:String;

  _location:string = "BE";
  get location(): string
  {
    return this._location;
  }

  @Input('location')
  set location(value:string)
  {
    this._location = value;
    this.service.getNewDataFromAPI(this.location).subscribe(
      (result) => {console.log(result)
        this.population = result.population;
        this.currency = result.currency_code;
        this.name = result.name;
      })
  }

  constructor(private service:CouckeService,private service2:BoeckxService) 
  { 
    this.service2.GetRandomnameBelgiumFromAPI().subscribe(
      (result) => {console.log(result)
        this.surname = result.surname;
      })
  }

  ngOnInit() 
  {
  }

}
