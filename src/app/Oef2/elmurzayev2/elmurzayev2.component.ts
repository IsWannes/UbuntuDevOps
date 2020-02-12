import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-elmurzayev2',
  templateUrl: './elmurzayev2.component.html',
  styleUrls: ['./elmurzayev2.component.css']
})
export class Elmurzayev2Component implements OnInit {

  flag:number=5;
  url:string= "https://www.gstatic.com/webp/gallery3/1.png";
  disabledButtonValue:string="BUTTON IS ACTIVE";
  buttonDisabled:boolean=false;
  inputType:string="text";
  inputValue:string="Hier het antwoord";
  checkButton:boolean=false;
  namen: string[]=["Jos", "Alexander", "Jan", "Olivier", "Julie"];


  changePhoto=()=>{
    if(this.flag==5){
      this.url="https://www.gstatic.com/webp/gallery3/2.png";
      this.flag++;
    }
    else if(this.flag==6){
      this.url="https://www.gstatic.com/webp/gallery3/1.png";
      this.flag--;
    }
    
    
  }
  disableButton=()=>{
    this.disabledButtonValue="BUTTON DISABLED";
    this.buttonDisabled=true;
  }
  showCheckButton=()=>{
    this.checkButton=true;
  }



  constructor() { }

  ngOnInit() {
  }

}
