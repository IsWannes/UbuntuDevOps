import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-van-opstal2',
  templateUrl: './van-opstal2.component.html',
  styleUrls: ['./van-opstal2.component.css']
})
export class VanOpstal2Component implements OnInit {
  changeText: boolean;
  Movies: any[] = [
    {
      "name": "Star Wars Episode V"
    },
    {
      "name": "Star Wars Episode VIII"
    },
    {
      "name": "Star Wars Episode VII"
    },
    {
      "name": "Star Wars Episode VI"
    },
    {
      "name": "Star Wars Episode II"
    }, 
    {
      "name": "Star Wars Episode III"
    }
  ];
  onSave($event){    
    console.log("Save button is clicked!", $event);    
  }
    
  constructor() {
       this.changeText = false;
  }

  ngOnInit() {
  }

}
