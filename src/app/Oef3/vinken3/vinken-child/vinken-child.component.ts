import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vinken-child',
  templateUrl: './vinken-child.component.html',
  styleUrls: ['./vinken-child.component.css']
})
export class VinkenChildComponent implements OnInit {

  @Input() SubTitle : string;

  constructor() { }

  ngOnInit() {
  }

}
