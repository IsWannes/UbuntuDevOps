import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baeten3',
  templateUrl: './baeten3.component.html',
  styleUrls: ['./baeten3.component.css']
})
export class Baeten3Component implements OnInit {

  showjokes : boolean = false

  constructor() { }

  ngOnInit() {
  }

  setBooleanShowJokes(inBool : boolean)
  {
    this.showjokes = inBool;
  }

  showAlert()
  {
    alert("Realy? Not just one joke??? please... :) ")
  }

}
