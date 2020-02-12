import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gokce-child',
  templateUrl: './gokce-child.component.html',
  styleUrls: ['./gokce-child.component.css']
})
export class GokceChildComponent implements OnInit {

  constructor() { }


  get Looks(){
    return "";
  }

  // @Input('looks') { getname : string; gettype:string;};
  
  
  
  

  ngOnInit() {
  }

}
