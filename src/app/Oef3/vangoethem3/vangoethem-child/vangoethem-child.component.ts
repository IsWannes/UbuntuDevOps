import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vangoethem-child',
  templateUrl: './vangoethem-child.component.html',
  styleUrls: ['./vangoethem-child.component.css']
})
export class VangoethemChildComponent implements OnInit {

  @Input("Text") TextChoose: string;
  
  constructor() { }

  ngOnInit() {
  }

}
