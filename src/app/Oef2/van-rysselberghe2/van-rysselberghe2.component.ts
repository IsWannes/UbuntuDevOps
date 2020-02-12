import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-van-rysselberghe2',
  templateUrl: './van-rysselberghe2.component.html',
  styleUrls: ['./van-rysselberghe2.component.css']
})
export class VanRysselberghe2Component implements OnInit {
  even:boolean=false;
  oneven:boolean=true;
  feb:boolean=false;
  hideDag:boolean=true;
  onevenDagen:number[]= new Array(31);
  evenDagen:number[]= new Array(30);
  febDagen:number[]= new Array(28);
  maanden:string[]=["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"];
  buttonLeftImage='https://cdn1.iconfinder.com/data/icons/basic-arrow/512/Artboard_22-512.png'
  buttonRightImage='https://cdn1.iconfinder.com/data/icons/basic-arrow/512/Artboard_21-512.png'
  teller:number=0;
  int:number;
  gekozenDag:string;
  textStyle:string="bold"
  constructor() { }

  ngOnInit() {
    for (var _i = 1;_i<32;_i++){
      this.onevenDagen[_i-1]=_i
    }
    for (var _i = 1;_i<31;_i++){
      this.evenDagen[_i-1]=_i
    }
    for (var _i = 1;_i<29;_i++){
      this.febDagen[_i-1]=_i
    }
  }

  VerhoogMaand(){
    this.teller++;
    if  (this.teller >= 12){
      this.teller=0;
    }
    this.CheckDagen(this.teller);
  }

  keyEvent(event:KeyboardEvent){
    let keyPressed = event.key
    console.log(keyPressed)
    if (keyPressed=="ArrowRight"){
      this.VerhoogMaand()
    }else if (keyPressed=="ArrowLeft"){
      this.VerlaagMaand()
    }
  }

  VerlaagMaand(){
    this.teller--;
    if  (this.teller < 0){
      this.teller=11;
    }
    this.CheckDagen(this.teller);
  }

  CheckDagen(i:number){
    if (i==0||i==2||i==4||i==6||i==7||i==9||i==11){
      this.even=false;
      this.oneven=true;
      this.feb=false;
    }else if (i==3||i==5||i==8||i==10) {
      this.even=true;
      this.oneven=false;
      this.feb=false;
    }else if (i==1){
      this.even=false;
      this.oneven=false;
      this.feb=true;
    }
  }

  GetMaand(maand:HTMLInputElement){
    this.int=0;
    for (let m of this.maanden){
      if (m==maand.value){
        this.teller=this.int;
        this.CheckDagen(this.teller);
      }
      this.int++;
    }
  }

  GetDag(dag:string){
    this.gekozenDag = dag + " " + this.maanden[this.teller];
    this.hideDag = false;
  }
}
