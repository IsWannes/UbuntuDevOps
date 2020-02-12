import { Component, OnInit } from '@angular/core';
import { YilmazService,  } from './yilmaz.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@Component({
  selector: 'app-yilmaz3',
  templateUrl: './yilmaz3.component.html',
  styleUrls: ['./yilmaz3.component.css']
})
export class Yilmaz3Component implements OnInit {

  input : string = "";

  constructor(private Restaurant : YilmazService) {
   }

   NiewMethode = (value) =>
    {
      //console.log("binnen")
      this.input = value;
    }

  async ngOnInit() {    

  }
  

}
