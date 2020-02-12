import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fruhschulz-child',
  templateUrl: './fruhschulz-child.component.html',
  styleUrls: ['./fruhschulz-child.component.css']
})
export class FruhschulzChildComponent implements OnInit {

  @Input("beschrijvingInput") desc:String;

  constructor() { }

  ngOnInit() {
  }

}
