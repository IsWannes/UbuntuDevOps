import { Component, OnInit, Input } from '@angular/core';
import { BoeckxService } from '../boeckx.service';

@Component({
  selector: 'app-boeckx-child',
  templateUrl: './boeckx-child.component.html',
  styleUrls: ['./boeckx-child.component.css']
})
export class BoeckxChildComponent implements OnInit {

  @Input("ShowName") showname: boolean

  name: String = null;
  button: String = "Klik voor random naam!";

  constructor(private service: BoeckxService) 
  {
  }

  getRandomName(){
    this.name = "";

    if(this.showname){
      this.service.GetRandomnameBelgiumFromAPI().subscribe(result => {
        this.name = result.surname;
      })   
    }
    else{
      this.service.GetRandomnameGermanyFromAPI().subscribe(result => {
        this.name = result.surname;
      })   
    }    
  }
  

  ngOnInit() {
  }

}
