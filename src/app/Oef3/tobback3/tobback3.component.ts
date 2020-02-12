import { Component, OnInit } from '@angular/core';
import { VandrielService, IFuck } from '../vandriel3/vandriel.service';
@Component({
  selector: 'app-tobback3',
  templateUrl: './tobback3.component.html',
  styleUrls: ['./tobback3.component.css']
})
export class Tobback3Component implements OnInit {

  constructor(private service: VandrielService) { }
  text: IFuck;
  Get(To, From) {
    if (To != "" && From != "") {
      this.service.GetFuckOffFromAPI(To, From).subscribe(result => {
        this.text = <IFuck>result;
      });
    }
  }

  ngOnInit() {
  }

}
