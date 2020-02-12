import { Component, OnInit, Input } from '@angular/core';
import { YilmazService,IResultaat,IRoot } from '../yilmaz.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@Component({
  selector: 'app-yilmaz-child',
  templateUrl: './yilmaz-child.component.html',
  styleUrls: ['./yilmaz-child.component.css']
})
export class YilmazChildComponent implements OnInit {

  Match : IResultaat[];
  Text:string;

  constructor(private service: YilmazService) { }

  get Location() {
    return "xd";
  }

  @Input('location')
  set Location(value: string) {

    this.Text = value;
    //console.log(this.StadLocatie)
    try {
     
        this.service.GetApiCall(this.Text).subscribe(result =>{
        this.Match = result.results;
        //console.log(result);
        
      })
    }
    catch (err) {
      console.log("Error");
    }
  }




  async ngOnInit() {
    
  }

}
