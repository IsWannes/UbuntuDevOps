import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tobback',
  templateUrl: './tobback.component.html',
  styleUrls: ['./tobback.component.css']
})
export class TobbackComponent implements OnInit {
  Myname:string ="Elias Tobback"
  people: Person[] = []
  temp: Person
  constructor() { }
  Create(_first: string, _last: string, _birthdate=new Date) {
    this.temp = new Person(_first, _last, _birthdate)
    this.people.push(this.temp)
  }
  ngOnInit() {
  }

}
export class Person {
  private today = new Date;
  private birth = new Date;
  public firstname: string;
  public lastname: string;
  public age: number;
  public birthdate: Date;
  constructor(_first: string, _last: string, _birthdate: Date) {
    this.firstname = _first;
    this.lastname = _last;
    this.birthdate = _birthdate;
    this.birth = new Date(this.birthdate)
    this.age = (this.today.getFullYear() - this.birth.getFullYear());
  }
}