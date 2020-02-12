import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-broos',
  templateUrl: './broos.component.html',
  styleUrls: ['./broos.component.css']
})
export class BroosComponent implements OnInit {

    constructor() {
        this.name = "Anton Broos";
    }

    ngOnInit() {
    }
  
    CurrentTime : Date;
    RefreshTime = () => {
      this.CurrentTime = new Date();
    }
  
    name : string;
  
    RndNum : number = 0 ;
    Rnd = () => {
      this.RndNum = (Math.random() * 100);
    } 

}