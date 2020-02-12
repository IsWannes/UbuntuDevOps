import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';


@Component({
  selector: 'app-claes2',
  templateUrl: './claes2.component.html',
  styleUrls: ['./claes2.component.css']
})
export class Claes2Component implements OnInit {

  //param: string[] = [];
  names:string[] =[];
  panel:boolean | false;
  usernames:boolean | false;
  toggleDisabled:boolean |false;
  length:number | null;
  imglink: string | null;
  //pressedKey: KeyboardEvent;
  constructor() {
    
   }
   panelActivate(){
     this.panel=true;
     this.toggleDisabled=true;
   }
   newName(name : HTMLInputElement){
     this.names.push(name.value);
   }
   activateUsernames(){
     this.usernames=true;
   }
   submitImage(imgnr){
    this.imglink="https://picsum.photos/id/"+imgnr+"/200/200";
   }
   onKeydown(event,name) {
    this.newName(name);
  }
   
  ngOnInit() {
  }

}
