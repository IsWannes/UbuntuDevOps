import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bernaerts',
  templateUrl: './bernaerts.component.html',
  styleUrls: ['./bernaerts.component.css']
})
export class BernaertsComponent implements OnInit {


  naam : string ="Dries Bernaerts"
  verjaardag = new Date(1998, 5, 11)
  datum : Date;

  constructor() { 
    this.datum=new Date()
  }

  ngOnInit() {
  }

}
