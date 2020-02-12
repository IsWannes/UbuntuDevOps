import { Component, OnInit } from '@angular/core';
import { AbrarService } from './abrar.service';

@Component({
  selector: 'app-abrar3',
  templateUrl: './abrar3.component.html',
  styleUrls: ['./abrar3.component.css']
})
export class Abrar3Component implements OnInit {

  public LastName: String = 'Abrar';
  public FirstName: string = 'Amirhosseyn';

  getFullName(): string {
    return this.FirstName + ' ' + this.LastName;
  }

  constructor() {
  }


  ngOnInit() {
  }
}
