import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vanopstal-child',
  templateUrl: './vanopstal-child.component.html',
  styleUrls: ['./vanopstal-child.component.css']
})
export class VanopstalChildComponent implements OnInit {

  @Input() ParentString: string;

  constructor() { }

  ngOnInit() {
  }

}
