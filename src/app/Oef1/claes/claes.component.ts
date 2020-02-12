import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

export class Person{
  name:String | null;
  lastName: String | null;
}
@Component({
  selector: 'app-claes',
  templateUrl: './claes.component.html',
  styleUrls: ['./claes.component.css']
})
export class ClaesComponent implements OnInit {
  person:Person;

  activeColor = 'red';
  colors = ['red','blue','yellow'];

  activeShowType = 'short';
  showTypes=['short','medium','long'];

  setColorAsActive(color){
    this.activeColor=color;
  }
  setShowTypeAsActive(showType){
    this.activeShowType=showType;
  }
  theDate : Date;
  randGet:Number;
  constructor(){
    this.person=new Person();
    this.person.name="Arnaud";
    this.person.lastName="Claes";
    setInterval(() => {
      this.theDate=new Date();
    }, 100);
    setInterval(() => {
      this.randGet= _.random(0,100);
    }, 2000);
  }
  GetName =() =>{
    return this.person.name;
  }
  ngOnInit() {
    
    }

}
