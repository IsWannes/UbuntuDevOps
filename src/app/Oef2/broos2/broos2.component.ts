import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-broos2',
  templateUrl: './broos2.component.html',
  styleUrls: ['./broos2.component.css']
})
export class Broos2Component implements OnInit{
  public Key: number;
  public Name: string;
  public keys = [];
  public showkey = false;


  constructor() {
  }

  ngOnInit() {
  }

  GenerateKey(naam:string, event){
    this.Name = naam;
    this.keys[0] = event.timeStamp;
    this.keys[1] = this.Name.charCodeAt(0);
    this.keys[2] = this.Name.charCodeAt(1);
    this.keys[3] = this.Name.charCodeAt(2);

    //display all keys

    this.Key = this.keys[0]/this.keys[1]+this.keys[2]*this.keys[3]
  }
  Show(){
    this.showkey = true;
  }
  
}
